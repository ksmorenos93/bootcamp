import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './modules/users/users.service';
import { ScoresService } from './modules/scores/scores.service';
import { AuthService } from './modules/auth/auth.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UsersService, ScoresService, AuthService],
})
export class AppModule {}
