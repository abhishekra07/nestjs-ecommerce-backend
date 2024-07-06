import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { ProductModule } from './product/product.module';
import { AccountModule } from './account/account.module';
import { ShoppingCartController } from './cart/shopping-cart.controller';
import { ShoppingCartModule } from './cart/shopping-cart.module';
import { CategoriesModule } from './category/categories.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { ReviewAndRatingModule } from './review/review-rating.module';
import { SearchModule } from './search/search.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    MailModule,
    UserModule,
    ProductModule,
    AccountModule,
    ShoppingCartModule,
    CategoriesModule,
    OrderModule,
    PaymentModule,
    ReviewAndRatingModule,
    SearchModule,
    AuthModule,
  ],
})
export class AppModule {}
