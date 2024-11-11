import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class UsersService {
    constructor ( private readonly prismaService: PrismaService) {}

        async getAllUsers(): Promise<PrismaService> {
            return this.prismaService.user.findMany(); // esta funcion viene de prisma
        }
    

    async getUserById(userdId:string): Promise<PrismaService> {
        const user = await this.prismaService.user.findUnique( { // esta funcion viene de Prisma puedes ver la documentacion
            where: {id:userId},
            select: ['email', 'userId', 'name'],
        });
      
    if(!user) { 
            throw new NotFoundException('User not found');
            
        }
        return user;

    }
    createUser(userDto: createUserDto): Promise<PrismaService> {

        return this.prismaService.create({data:userDto})
    }

}
