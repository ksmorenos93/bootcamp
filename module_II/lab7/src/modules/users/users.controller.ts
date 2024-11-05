import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  //@UseGuards(JwtAuthGuard, RolesGuard)
  //@Roles('admin')
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('hi')
  createUser() {
    return {hi: "hola"};
  }
}
