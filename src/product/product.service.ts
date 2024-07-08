import { Injectable } from '@nestjs/common';
import { ProductRepository } from './repository/product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAllProducts() {
    return await this.productRepository.find();
  }

  async createProduct(productRequest: CreateProductDto) {
    const product: Product = this.productRepository.create(productRequest);
    return await this.productRepository.save(product);
  }
}
