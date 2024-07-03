import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { IsEmail, IsIn, IsOptional } from 'class-validator';
import { UserRole } from '../user-role.enum';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsIn([UserRole.ADMIN, UserRole.CUSTOMER])
  type: string;
}
