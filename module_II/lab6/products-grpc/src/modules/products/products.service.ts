import { Injectable } from '@nestjs/common';
import {faker} from '@faker-js/faker';
import {v4 as uuidv4} from 'uuid';
import { GrpcMethod } from '@nestjs/microservices';

export interface Product {
  name: string;
  id: string;
  price: number;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor() {
    this.generateMockData();
  }

  private generateMockData(): void {
    for (let i = 0; i < 100; i++) {
      this.products.push({
        id: uuidv4(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price())
      });
    }
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: string): Product {
    return this.products.find(product => product.id === id);
  }

  createProduct(data: Product): Product {
    const product = {...data,  id: uuidv4()}
    this.products.push(product);
    return product;
  }

  updateProduct(id: string, data: Product): Product {
    const ProductIndex = this.products.findIndex(product => product.id === id);
    this.products[ProductIndex] = data;
    return this.products[ProductIndex];
  }

  deleteProduct(id: string) {
    this.products = this.products.filter(product => product.id !== id);
    return {};
  }
}
