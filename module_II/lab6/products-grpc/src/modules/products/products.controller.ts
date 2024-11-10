import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

import { Product, ProductsService } from './products.service';

interface  ProductId {
  id: string;
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @GrpcMethod('ProductService','GetAllProducts')
  getAllProducts() {
    return {products: this.productsService.getAllProducts()};
  }

  @GrpcMethod('ProductService','GetProductById')
  getProductById(data:ProductId,
                 Metadata,
                 ServerUnaryCall) {
    return this.productsService.getProductById(data.id);
  }

  @GrpcMethod('ProductService','CreateProduct')
  createProduct(data:Product,
                 Metadata,
                 ServerUnaryCall) {
    return this.productsService.createProduct(data);
  }

  @GrpcMethod('ProductService','UpdateProduct')
  updateProduct(data:Product,
                Metadata,
                ServerUnaryCall) {
    return this.productsService.updateProduct(data.id, data);
  }

  @GrpcMethod('ProductService','DeleteProduct')
  deleteProduct(data:ProductId,
                Metadata,
                ServerUnaryCall) {
    return this.productsService.deleteProduct(data.id);
  }

}
