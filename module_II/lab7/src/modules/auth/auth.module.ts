import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: '1h',
      }
    }),
    PassportModule
  ],
  providers: [AuthService, JwtStrategy, UsersService],
  controllers: [AuthController]
})
export class AuthModule {}
