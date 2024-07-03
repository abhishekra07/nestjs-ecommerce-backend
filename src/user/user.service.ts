import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repository/user.repository';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private mailService: MailerService,
  ) {}
  createUser(createUserRequest: CreateUserDto) {}
}
