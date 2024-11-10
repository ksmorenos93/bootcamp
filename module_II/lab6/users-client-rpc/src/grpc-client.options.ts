import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'products',
    protoPath: join(__dirname, 'proto/products.proto'),
    url: 'localhost:50051'
  }
}