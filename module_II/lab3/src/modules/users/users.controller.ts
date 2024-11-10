import { Controller, Query, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { PaginationQueryDto } from '../../commons/dto/pagination-query.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(@Query() paginationQuery: PaginationQueryDto) {
    return this.usersService.getAllUsers(paginationQuery);
  }
}
