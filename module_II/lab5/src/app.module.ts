import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schemas/schema.gql'),
    }),
    ProductsModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
