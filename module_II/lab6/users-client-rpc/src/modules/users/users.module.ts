import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { grpcClientOptions } from '../../grpc-client.options';

@Module({
  imports: [
    ClientsModule.register([{
    name: 'PRODUCTS_PACKAGE',
    ...grpcClientOptions
  }])
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
