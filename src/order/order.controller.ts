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
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    // return this.orderService.createOrder(createOrderDto);
  }

  @Get()
  getAllOrders() {
    // return this.orderService.getAllOrders();
  }

  @Get(':orderId')
  getOrderById(@Param('orderId') orderId: string) {
    // return this.orderService.getOrderById(orderId);
  }

  @Patch(':orderId')
  updateOrder(
    @Param('orderId') orderId: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    // return this.orderService.updateOrder(orderId, updateOrderDto);
  }

  @Delete(':orderId')
  cancelOrder(@Param('orderId') orderId: string) {
    // return this.orderService.cancelOrder(orderId);
  }
}
