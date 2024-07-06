import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Constants } from 'src/shared/constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  signJwtToken(userId: number, email: string) {
    const payload = {
      sub: userId,
      email: email,
    };
    return this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>(Constants.JWT_SECRET),
      expiresIn: this.configService.get<string>(Constants.JWT_EXPIRES_IN),
    });
  }
}
