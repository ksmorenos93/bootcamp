import { Controller, Get, Inject, OnModuleInit,
  Param, Post, Body, Put, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import {
  ClientGrpc,
} from '@nestjs/microservices';

export interface Product {
  id: string;
  name: string;
  price: number;
}
export interface ProductId {
  id: string;
}

export interface ProductService {
  getAllProducts({}): {product: Product[]};
  getProductById(ProductId): Product;
  createProduct(product: Product): Product;
  updateProduct(Product): Product;
  deleteProduct(ProductId);
}

@Controller('products')
export class ProductsController {
  private productService: ProductService;

  constructor(@Inject('PRODUCTS_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit(): void {
    this.productService = this.client.getService<ProductService>('ProductService');
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts({});
  }

  @Get('/:productId')
  getProductById(@Param('productId') productId: string) {
    return this.productService.getProductById({id: productId });
  }

  @Post('/create')
  createProduct(@Body() product: Product) {
    this.productService.createProduct(product);
  }

  @Put('/update/:productId')
  updateProduct(@Param('productId') productId: string, @Body() data: Product) {
    const product = {...data, id: productId};
    return this.productService.updateProduct(product);
  }

  @Delete('/delete/:productId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProduct(@Param('productId') productId: string) {
    return this.productService.deleteProduct({id: productId});
  }

}
