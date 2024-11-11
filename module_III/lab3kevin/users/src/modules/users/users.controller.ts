import { Controller, Get,  } from '@nestjs/common';
import { UsersService } from './users.service';
import {ApiTags,ApiOperation, ApiResponse} from '@nestjs/swagger';
import {User} from '@prisma/client';



@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    @ApiOperation({summary: "Get all users for a score"})
    async getAllUsers(): Promise <User[]> {
        return this.usersService.getAllUsers();
    }
}
