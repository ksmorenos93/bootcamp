import { Controller, Get, Param, Post,Body, Put, Delete, HttpCode } from '@nestjs/common';
import { UsersService, User } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() : User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string ): User | undefined {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): User {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param('id') id: string ) {
    this.usersService.deleteUser(id);
  }

}
