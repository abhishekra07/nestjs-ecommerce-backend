import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    this.userService.createUser(createUser);
  }

  @Post('login')
  login(@Body() loginRequest: { email: string; password: string }) {}

  @Post('verify-otp/:otp')
  verifyOtp() {}

  @Get('send-email/:email')
  sendEmail(@Param('email') email: string) {
    this.userService.sendEmail(email);
    return { message: 'Sent email success!' };
  }
}
