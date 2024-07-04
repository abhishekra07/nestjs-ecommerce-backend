import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAllCategories() {
    // return this.categoriesService.getAllCategories();
  }

  @Get(':categoryId/products')
  getProductsByCategory(@Param('categoryId') categoryId: string) {
    // return this.categoriesService.getProductsByCategory(categoryId);
  }

  @Post()
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    // return this.categoriesService.createCategory(createCategoryDto);
  }

  @Patch(':categoryId')
  updateCategory(
    @Param('categoryId') categoryId: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    // return this.categoriesService.updateCategory(categoryId, updateCategoryDto);
  }

  @Delete(':categoryId')
  deleteCategory(@Param('categoryId') categoryId: string) {
    // return this.categoriesService.deleteCategory(categoryId);
  }
}
