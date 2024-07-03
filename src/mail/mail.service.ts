import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class mailService {
  constructor(
    private readonly config: ConfigService,
    private readonly mailerService: MailerService,
  ) {}

  sendEmail(email: string) {
    const message = `Forgot your password? If you didn't forget your password, please ignore this email!`;

    this.mailerService.sendMail({
      from: {
        name: this.config.get<string>('APP_NAME'),
        address: this.config.get<string>('EMAIL_HOST'),
      },
      to: email,
      subject: `How to Send Emails with Nodemailer`,
      text: message,
    });
  }
}
