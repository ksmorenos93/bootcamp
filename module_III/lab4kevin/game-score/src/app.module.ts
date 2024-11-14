// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScoresModule } from './modules/scores/scores.module';
import { AuthModule } from './modules/auth/auth.module';
//import { PrismaModule } from '../prisma/prisma.module'; // Corrected import path

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AuthModule,
    UsersModule,    // Register feature modules
    ScoresModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
