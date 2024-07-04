import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { PaymentDto } from './dto/payment.dto';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentsService: PaymentService) {}

  @Post()
  processPayment(@Body() paymentDto: PaymentDto) {
    // return this.paymentsService.processPayment(paymentDto);
  }

  @Get(':paymentId')
  getPaymentDetails(@Param('paymentId') paymentId: string) {
    // return this.paymentsService.getPaymentDetails(paymentId);
  }

  @Post(':paymentId/refund')
  refundPayment(@Param('paymentId') paymentId: string) {
    // return this.paymentsService.refundPayment(paymentId);
  }
}
