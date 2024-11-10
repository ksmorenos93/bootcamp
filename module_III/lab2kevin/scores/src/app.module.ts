import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScoresModule } from './modules/scores/scores.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI), // la conexion a la base de datos la paso como variable de entorno. 
    ScoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
