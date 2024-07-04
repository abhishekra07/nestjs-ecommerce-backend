import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { IsEmail, IsIn, IsOptional } from 'class-validator';
import { UserRole } from '../user-role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsIn([UserRole.ADMIN, UserRole.CUSTOMER])
  type: string;
}
