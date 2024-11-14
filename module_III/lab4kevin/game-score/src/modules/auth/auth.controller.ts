import { Controller, Get, Post, Body,  HttpStatus, Req} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Request} from "express";
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';


export interface User {
    email:string;
    password: string;
    id: string;
}

@Controller('auth')
export class AuthController {

    constructor (private readonly authService:AuthService) {}

    @Post('login')
    @ApiOperation({summary: 'Crear un nuevo jugador'})
    @ApiResponse({status: HttpStatus.CREATED, description: 'El jugador has sido creado'})
    @ApiResponse({status:HttpStatus.BAD_REQUEST, description: 'data equivocada'})
    login(@Body() user: LoginUserDto) {
        return this.authService.login(user);
    }

    @Get('token-validate')
    @ApiBearerAuth()
    @ApiOperation({summary: 'Validar token'})
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Validar token de usuario'})
    @ApiResponse({status:HttpStatus.BAD_REQUEST, description: 'data equivocada'})
    validateToken(@Req() req:Request) {
        const [type, token] = req.headers?.authorization?.split(' ') ?? [];
        return this.authService.validateToken(token);
    }
}
