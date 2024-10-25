import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

export interface User {
  username: string;
  password: string;
  id: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() user: User) {
    return this.authService.login(user.password, user.id);
  }
}
