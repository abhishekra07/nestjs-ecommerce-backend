import { ApiProperty } from '@nestjs/swagger';

export class PaymentDto {
  @ApiProperty()
  orderId: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  paymentMethod: string;
}
