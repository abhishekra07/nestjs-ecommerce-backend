import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }

  @Post('login')
  login(@Body() loginRequest: { email: string; password: string }) {
    return this.userService.login(loginRequest);
  }

  @Get('verify-otp/:otp/:email')
  verifyOtp(
    @Param('otp', ParseIntPipe) otp: number,
    @Param('email') email: string,
  ) {
    return this.userService.verifyEmail(email, otp);
  }

  @Patch()
  updateUser(@Body() updateRequest: UpdateUserDto) {}
}
