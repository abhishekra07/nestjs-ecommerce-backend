import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Constants } from 'src/shared/constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard(Constants.JWT_STRATEGY) {}
