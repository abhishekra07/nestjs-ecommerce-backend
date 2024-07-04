import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Module({
  imports: [JwtModule],
  providers: [AuthService],
  exports: [AuthService, JwtStrategy, JwtAuthGuard],
})
export class AuthModule {}
