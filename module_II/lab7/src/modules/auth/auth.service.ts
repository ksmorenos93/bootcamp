import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

  constructor(private userService: UsersService, private jwtService: JwtService) {
  }

  validateUser(username: string, password: string) {
    const user = this.userService.validateUser(username, password);
    if(user) {
      return user;
    }
    return null;
  }

  login(username: string, password: string) {
    const payload = { username, id: "dfjdf", roles: ['admin'] };
    return {
      token: this.jwtService.sign(payload)
    }
  }
}
