import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import {faker} from '@faker-js/faker';
import { hash, compare } from 'bcryptjs';


export interface User {
  id: string;
  username: string;
  password: string;
  roles: string[];
}

@Injectable()
export class UsersService {

  private users: User[] = [];

  constructor() {
    this.generateMockData();
  }

  private generateMockData(): void {
    for (let i = 0; i < 100; i++) {
      this.users.push({
        id: uuidv4(),
        username: faker.internet.userName(),
        password: hash("holaMundo", 10),
        roles: [faker.helpers.arrayElement(['player', 'admin'])]
      });
    }
  }

  getAllUsers() {
    return this.users;
  }

  validateUser(username: string, password: string) {
    const user = this.users.find(user => user.username === username);
    if (user && compare(password, user.password)) {
      return user;
    }
    return null;
  }
}
