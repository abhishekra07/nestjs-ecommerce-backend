// search.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('products')
  searchProducts(@Query('q') searchQuery: string) {
    // return this.searchService.searchProducts(searchQuery);
  }

  @Get('products')
  filterProducts(
    @Query('category') categoryId: string,
    @Query('brand') brandId: string,
    @Query('price_range') priceRange: string,
  ) {
    // return this.searchService.filterProducts(categoryId, brandId, priceRange);
  }
}
