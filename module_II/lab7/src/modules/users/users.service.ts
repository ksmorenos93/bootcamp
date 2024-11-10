import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import {faker} from '@faker-js/faker';
import { hash, compare } from 'bcryptjs';


export interface User {
  userId: string;
  scoreId: string
  game: string;
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class UsersService {

  private users: User[] = [];

  constructor() {
    console.log()
    this.generateMockData();
  }

  private generateMockData(): void {
    for (let i = 0; i < 20; i++) {
      this.users.push({
        userId: uuidv4(),
        scoreId: uuidv4(),
        game: faker.internet.domainWord(),
        score: parseInt(faker.string.numeric({ length: { min: 5, max: 10 } })),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }

  getAllUsers() {
    return this.users;
  }

  validateUser(username: string, password: string) {
    //const user = this.users.find(user => user.username === username);
    //if (user && compare(password, user.password)) {
      return {};
    //}
   // return null;
  }
}
