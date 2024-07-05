import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  products: { productId: string; quantity: number }[];

  @ApiProperty()
  shippingAddressId: string;
}
