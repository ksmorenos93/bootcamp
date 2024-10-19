import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import {faker} from '@faker-js/faker';
import { PaginationQueryDto } from '../../commons/dto/pagination-query.dto';


export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface Paginator {
  data: [];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor() {
    this.generateMockData();
  }

  private generateMockData(): void {
    for (let i = 0; i < 1000; i++) {
      this.users.push({
        id: uuidv4(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        role: faker.helpers.arrayElement(['player', 'admin']),
      });
    }
  }

  getAllUsers(paginationQuery: PaginationQueryDto): Paginator {
    const { limit = 10, page = 1 } = paginationQuery;
    const start = (page - 1) * limit;
    const end = start + limit;

    const data = this.users.slice(start, end);
    const total = this.users.length;
    const totalPages = Math.ceil(total / limit);

    return <Paginator>{
      data,
      total,
      page,
      limit,
      totalPages,
    }
  }
}
