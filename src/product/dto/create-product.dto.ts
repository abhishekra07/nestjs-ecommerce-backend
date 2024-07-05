import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  sku: string;

  @ApiProperty()
  category_id: number;

  @ApiProperty()
  brand_id: number;

  @ApiProperty()
  stock_quantity: number;

  @ApiProperty()
  weight: number;

  @ApiProperty()
  dimensions: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  size: string;

  @ApiProperty()
  material: string;

  @ApiProperty()
  images: any;
}
