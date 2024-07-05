import { ApiProperty } from '@nestjs/swagger';

export class AddCartItemDto {
  @ApiProperty()
  productId: string;

  @ApiProperty()
  quantity: number;
}
