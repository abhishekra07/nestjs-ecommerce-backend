import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotVerifiedException extends HttpException {
  constructor() {
    super(
      'User not verified! Please verify your email first!',
      HttpStatus.FORBIDDEN,
    );
  }
}
