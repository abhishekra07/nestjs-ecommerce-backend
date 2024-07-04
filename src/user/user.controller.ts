import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    this.userService.createUser(createUser);
  }

  @Post('login')
  login(@Body() loginRequest: { email: string; password: string }) {}

  @Post('verify-otp/:otp/:email')
  verifyOtp() {}
}
