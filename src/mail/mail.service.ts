import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private readonly config: ConfigService,
    private readonly mailerService: MailerService,
  ) {}

  sendEmail(email: string, subject: string, template: any, context?: any) {
    const sendMailOptions = {
      from: this.config.get<string>('DEFAULT_EMAIL'),
      to: email,
      subject: subject,
      template: template,
      context: context,
    };
    try {
      this.mailerService.sendMail(sendMailOptions);
      return true;
    } catch (error) {
      console.log(
        `sendEmail : Error while sending email. payload : ${sendMailOptions} error : ${error}`,
      );
      return false;
    }
  }
}
