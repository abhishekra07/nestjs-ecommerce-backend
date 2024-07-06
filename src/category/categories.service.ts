import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './repository/category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  createCategory(categoryRequest: CreateCategoryDto) {
    const existingCategory = this.categoryRepository.find({
      where: { name: categoryRequest.name },
    });
    if (existingCategory) {
      throw new Error('Category already exists');
    }
    const category: Category = this.categoryRepository.create(categoryRequest);
    return this.categoryRepository.save(category);
  }

  getAllCategories() {
    return this.categoryRepository.find();
  }
}
