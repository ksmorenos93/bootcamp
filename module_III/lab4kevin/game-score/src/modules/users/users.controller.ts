import { Controller,Get, Post, Body, Param, Put, Patch, Delete, UseInterceptors,  HttpCode, HttpStatus, UseGuards, Req, UploadedFile, Res } from '@nestjs/common';
import {ApiConsumes, ApiOperation, ApiResponse, ApiTags, ApiBody} from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import { resolveSoa } from 'dns';
import {UsersService} from './users.service'
import {CreateUserDto} from './dto/create-user.dto'
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express, Request , Response} from 'express';


@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Put(':userId')
    @ApiOperation({summary: 'Actualizar un jugador'})
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type:'object',
            properties: {
                name: {type: 'string'},
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @ApiResponse({status: HttpStatus.OK, description: 'El jugador ha sido actualizado'})
    @ApiResponse({status: HttpStatus.NOT_FOUND,description: 'Usuario no encontrado'})
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './dist/uploads', 
                filename: (req, file, callback) => {
                    const uniqueSuffix= Date.now() + '-' + Math.round(Math.random()*1e9);
                    const ext = extname(file.originalname);
                    const filename = `$(uniqueSuffix)${ext}`;
                    callback(null, filename);
                },
            }), 
            limits: {fileSize: 1024 * 1024 * 2}, 
        }),
    )
    updateUser(@Param('userId') userId: string, 
                @UploadedFile() file: Express.Multer.File,
                 @Req() request: Request) {
                    return this.usersService.updateUserById(userId, file, request.body);
                }

    
    @Delete(':userId')
    @ApiOperation({summary: "Inactivar un jugador"})
    @ApiResponse({status: HttpStatus.NO_CONTENT, description: 'El jugador ha sido eliminado'})
    @ApiResponse({status: HttpStatus.NOT_FOUND,description: "Usuario no encontrado"})
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteUser(@Param('userId') userId: string){
        return this.usersService.deleteUserById(userId);
    }

    @Patch(':userId')
    @ApiResponse({status: HttpStatus.NO_CONTENT, description: 'El jugador ha sido activado o inactivado'})
    @ApiResponse({status: HttpStatus.NOT_FOUND,description: "Usuario no encontrado"})
    changeUserStatusById(@Param('userId') userId: string) {
        return this.usersService.changeUserStatusById(userId);
    }

    @Get(':userId/download-image')
    @ApiOperation({summary: "Descargar imagen y data de un jugador"})
    @ApiResponse({status: HttpStatus.OK, description: 'Descarga en detalle con la imagen del jugador'})
    downloadImage(@Param('userId') userId: string, @Res() res: Response ) {
        return this.usersService.downloadImage(userId, res);
    }


    @Post()
    @ApiOperation({summary: 'crear un nuevo jugador'})
    @ApiResponse({status: HttpStatus.CREATED, description: 'El jugador ha sido creado'})
    @ApiResponse({status: HttpStatus.BAD_REQUEST, description: 'Data equivocada'})
    createUser(@Body() data: CreateUserDto) {
        return this.usersService.createUser(data);
    }


    @Get()
    //@UseGuards(JwtAuthGuard, RolesGuard)
    //@Roles('ADMIN', 'PLAYER')
    //@ApiBearerAuth()
    @ApiOperation({summary: "Get all users"})
    @ApiResponse ({status: HttpStatus.OK, description: "Lista de jugadores"})
    getAllUsers() {
        return this.usersService.getAllUsers();
    }


    @Get(':userId')
    @ApiOperation({summary: "get user by userId"})
    @ApiResponse({status:HttpStatus.OK, description: 'get user by userId' })
    @ApiResponse({status:HttpStatus.NOT_FOUND, description: 'user not found' })
    getUserById(@Param('userId')userId:string) {
        return this.usersService.getUserById(userId);
    }

}