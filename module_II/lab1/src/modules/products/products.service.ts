import {faker} from '@faker-js/faker';
import {Injectable} from '@nestjs/common';
import {Product} from "./entities/product.entity";

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor() {
    this.generateMockData();
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  private generateMockData(): void {
    for (let i = 0; i < 100; i++) {
      this.products.push({
        id: i + 1,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
        imageUrl: faker.image.url(),
      });
    }
  }
}
