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
import { ShoppingCartService } from './shopping-cart.service';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@ApiTags('cart')
@Controller('cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Post('items')
  addItemToCart(@Body() addCartItemDto: AddCartItemDto) {
    // return this.shoppingCartService.addItemToCart(addCartItemDto);
  }

  @Get()
  getCartItems() {
    // return this.shoppingCartService.getCartItems();
  }

  @Patch('items/:itemId')
  updateCartItem(
    @Param('itemId') itemId: string,
    @Body() updateCartItemDto: UpdateCartItemDto,
  ) {
    // return this.shoppingCartService.updateCartItem(itemId, updateCartItemDto);
  }

  @Delete('items/:itemId')
  removeItemFromCart(@Param('itemId') itemId: string) {
    // return this.shoppingCartService.removeItemFromCart(itemId);
  }

  @Delete()
  clearCart() {
    // return this.shoppingCartService.clearCart();
  }
}
