import { Injectable, NotFoundException } from '@nestjs/common';
import {PrismaService} from  '../../../prisma/prisma.service'
import {join} from 'path'; 
import * as fs from 'fs';
import {Response} from 'express'; 
import {CreateUserDto} from './dto/create-user.dto';
import {hash,compare} from 'bcryptjs';

@Injectable()
export class UsersService {

    constructor (private prisma: PrismaService) {}

    async updateUserById(userId: string, file:any, data: any) {
        const updateUser = await this.prisma.user.update ({
            where: {userId},
            data: {
                name: data.name,
                avatar: file.filename,
            },
        });

        return this.getUserById(updateUser.userId);
    }

    async deleteUserById(userId:string) {
        await this.prisma.user.update({
            where: {userId},
            data: {
                status: "INACTIVE",
            }
        });
    }

    async changeUserStatusById(userId:string) {
        const user = await this.getUserById(userId);

        const changeUserStatus = await this.prisma.user.update({
            where: {userId},
            data: {
                status: user.status === "ACTIVE" ? "BLOCKED" : "ACTIVE",
            }
        });

    return this.getUserById(changeUserStatus.userId);
    }

    async downloadImage (userId: string, res: Response) {
        let user = await this.getUserById(userId);
        const filePath = join(__dirname, '..', '..', '..','uploads', user.avatar);

        user.avatar = fs.readFileSync(filePath, {encoding:'base64', flag: 'r'});

        return res.json(user);
    }

    async validateUser(email: string, password:string) {
        let userItem = await this.prisma.user.findUnique ({

            where: {
                email, 
                OR: [
                    {
                        status: "ACTIVE",
                    }, 
                    {
                        status:"BLOCKED",
                    }
                ]
            }, 

            select: {
                email:true,
                password:true,
                userId: true,
                roles: {
                    select: {
                        name:true,
                    }
                }
            },
        });

        let roles = [];
        for (const [key, value] of Object.entries(userItem?.roles)) {
            roles.push(value?.name);
        }

        userItem.roles = roles;
        const user = {
            email: userItem.email,
            roles: userItem.roles,
            sub: userItem.userId

        };

        if (userItem && compare(password, userItem.password)) {
            return user;
        }

        return null;
    }

 

    async createUser(body: CreateUserDto) {
        let roles= [];
        for (const [key, value] of Object.entries(body?.roles)) {
            const role = await this.prisma.role.findUnique( {
                where: { 
                    name:value.toString(), 
                }, 
            });
            roles.push({id: role?.id});
        }

        const pass = await hash(body.password, 10); 

        const user = await this .prisma.user.create ({
            data: {
                name:body?.name, 
                password: pass, 
                email: body?.email,
                roles: {
                    connect: roles,
                },
            }, 
        });
        return this.getAllUsers()
    }

    async getAllUsers() {
        let users = [];
        const items = await this.prisma.user.findMany ({ // filtro mis datos basado en el status
            where: {
                OR: [
                    {

                        status: "ACTIVE" 
                    },
                    {
                        status: "BLOCKED", 
                    }
                ]
            }, 

            select: { //selecciono lo que necesito
                
                email:true,
                name:true,
                avatar:true, 
                userId:true,
                status:true,
                roles: {
                    select: {
                        name:true,
                    }
                }
            },
        });

        items.forEach((item) => { // itero sobre ese grupo de datos filtrado para poder indicar el rol de ese usuario.
            let roles= [];
            for (const [key,value] of Object.entries(item?.roles)) {
                roles.push(value?.name);
            }

            item.roles = roles;
            users.push(item);
        });

        return users; //retorno mi objeto
    }

    async getUserById(userId:string) {
        let userItem= await this.prisma.user.findUnique ({ // filtro mis datos basado en el status
            where: {userId,
                OR: [
                    {

                        status: "ACTIVE" 
                    },
                    {
                        status: "BLOCKED", 
                    }
                ]
            }, 

            select: { //selecciono lo que necesito
                
                email:true,
                name:true,
                avatar:true, 
                userId:true,
                status:true,
                roles: {
                    select: {
                        name:true,
                    }
                }
            },
        });

            let roles= [];
            for (const [key,value] of Object.entries(userItem?.roles)) {
                roles.push(value?.name);
            }

            userItem.roles = roles;
        

        return userItem; //retorno mi objeto
    }

}
