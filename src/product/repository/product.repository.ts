import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductRepository extends Repository<Product> {}
