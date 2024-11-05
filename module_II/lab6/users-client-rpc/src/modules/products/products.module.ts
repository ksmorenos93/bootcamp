import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../../grpc-client.options';


@Module({
  imports: [
    ClientsModule.register([{
      name: 'PRODUCTS_PACKAGE',
      ...grpcClientOptions
    }])
  ],
  controllers: [ProductsController]
})
export class ProductsModule {}
