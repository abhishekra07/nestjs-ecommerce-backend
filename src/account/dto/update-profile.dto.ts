import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiProperty()
  fullName?: string;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  phoneNumber?: string;
}
