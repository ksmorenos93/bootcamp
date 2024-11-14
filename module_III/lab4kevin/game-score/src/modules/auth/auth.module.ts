import { Module } from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {JwtStrategy} from './jwt.strategy';
import {PassportModule} from "@nestjs/passport"

import {AuthService} from "./auth.service"
import {AuthController} from './auth.controller';
import {UsersService} from '../users/users.service'
import {PrismaService} from '../../../prisma/prisma.service'
import {ConfigModule, ConfigService} from '@nestjs/config';


@Module({
    imports: [
        ConfigModule,
        PassportModule,
        JwtModule.registerAsync({
            imports:[ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get('SECRET_KEY'),
                signOptions: {expiresIn: `${configService.get('JWT_EXPIRES_IN')}s`},
            }),
        }),
        PassportModule
    ],
    providers: [AuthService, JwtStrategy, UsersService, PrismaService],
    controllers: [AuthController]
})
export class AuthModule {}
