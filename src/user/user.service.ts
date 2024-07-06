import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repository/user.repository';
import { MailService } from 'src/mail/mail.service';
import { User } from './entities/user.entity';
import {
  doesPasswordMatch,
  hashPassword,
} from 'src/shared/utility/password-utility';
import { AuthService } from 'src/auth/auth.service';
import { UserNotFoundException } from 'src/shared/exception/user-not-found';
import { UserNotVerifiedException } from 'src/shared/exception/user-not-verified';
import { InvalidPasswordException } from 'src/shared/exception/invalid-password';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private mailService: MailService,
    private authService: AuthService,
  ) {}
  async createUser(createUserRequest: CreateUserDto) {
    /* check if email already exists */
    const userExist = await this.userRepository.findOne({
      where: {
        email: createUserRequest.email,
      },
    });
    console.log('userExist ', userExist);
    if (userExist) {
      throw new Error('User already exists!');
    }

    let user: User = new User();
    user.name = createUserRequest.name;
    user.email = createUserRequest.email;
    user.password = await hashPassword(createUserRequest.password);
    user.isVerified = false;
    const otp = Math.floor(Math.random() * 1000000);

    user.otp = otp;
    user = await this.userRepository.save(user);

    this.sendOtpEmail(user.email, {
      name: user.name,
      otp: otp,
      email: user.email,
    });

    delete user.password;
    return {
      message: 'User created successfully and sent verification email!',
      user,
    };
  }

  async login(loginRequest: { email: string; password: string }) {
    const user = await this.userRepository.findOne({
      where: {
        email: loginRequest.email,
      },
    });

    if (!user) {
      throw new UserNotFoundException();
    }

    if (!user.isVerified) {
      throw new UserNotVerifiedException();
    }

    if (!(await doesPasswordMatch(user.password, loginRequest.password))) {
      throw new InvalidPasswordException();
    }

    delete user.password;

    const auth_token = await this.authService.signJwtToken(user.id, user.email);
    return {
      message: 'Login successful!',
      user,
      auth_token,
    };
  }

  async verifyEmail(email: string, otp: number) {
    let user: User = await this.userRepository.findOne({
      where: {
        email: email,
        otp: otp,
      },
    });
    if (!user) {
      return {
        message: 'User not found!!!!',
      };
    }
    user.isVerified = true;
    user.otp = null;
    user = await this.userRepository.save(user);
    return {
      message: 'Verified user successfully, you can user our services now!',
    };
  }

  sendOtpEmail(email: string, context: any) {
    let subject = 'Verify Your Account with 3DCart';
    return this.mailService.sendEmail(email, subject, 'welcome', context);
  }
}
