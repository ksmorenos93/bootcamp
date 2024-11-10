import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import {ApiTags,ApiOperation, ApiResponse} from '@nestjs/swagger';
import { UsersService } from './users.service';
import {User} from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({summary: 'Get all users for a score'})
  async getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':userId')
  @ApiOperation({summary: 'get Score by Id'})
  @ApiResponse({status: 200, description: 'User by Id'})
  async getUserByUserId(@Param('userId') userId: string) {
    return this.usersService.getUserByUserId(userId);
  }

  @Post()
  @ApiOperation({summary: 'Create User'})
  @ApiResponse({status: 201, description: 'Create User'})
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
