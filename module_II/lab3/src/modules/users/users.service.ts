import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import {faker} from '@faker-js/faker';
import { PaginationQueryDto } from '../../commons/dto/pagination-query.dto';
import { hash, compare } from 'bcryptjs';


export interface User {
  userId: string;
  username: string;
  name: string;
  email: string;
  password: string;
  roles: string[];
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
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
        userId: uuidv4(),
        username: faker.internet.userName(),
        password: hash("holaMundo", 10),
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        roles: [faker.helpers.arrayElement(['player', 'admin'])],
        createdAt: new Date(),
        updatedAt: new Date(),
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
