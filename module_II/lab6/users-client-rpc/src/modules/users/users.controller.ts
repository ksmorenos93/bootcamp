import { Controller, Get, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

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

@Controller('users')
export class UsersController {

  private productService: ProductService;

  constructor(@Inject('PRODUCTS_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit(): void {
    this.productService = this.client.getService<ProductService>('ProductService');
  }

  @Get('/products')
  getAllProducts() {
    return this.productService.getAllProducts({});
  }
}
