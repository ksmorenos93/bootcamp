import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import {faker} from '@faker-js/faker';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export interface User {
  id: string;
  email: string;
  name: string;
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
        name: faker.internet.userName(),
        email: faker.internet.email(),
      });
    }
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    return this.users.find(user => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = {id: uuidv4(), ...createUserDto};
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return null;
    }

    this.users[userIndex] = {...this.users[userIndex], ...updateUserDto};
    return this.users[userIndex];
  }

  deleteUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id);
  }

}
