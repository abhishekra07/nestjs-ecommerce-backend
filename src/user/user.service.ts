import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repository/user.repository';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private mailService: MailService,
  ) {}
  createUser(createUserRequest: CreateUserDto) {}

  sendOtpEmail(email: string) {
    let subject = 'Verify Your Account with 3DCart';
    return this.mailService.sendEmail(email, subject, 'welcome', {
      name: 'Abhishek',
      otp: 12345,
      email: email,
    });
  }
}
