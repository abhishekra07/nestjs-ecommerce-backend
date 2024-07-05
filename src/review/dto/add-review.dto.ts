import { ApiProperty } from '@nestjs/swagger';

export class AddReviewDto {
  @ApiProperty()
  rating: number;

  @ApiProperty()
  comment: string;
}
