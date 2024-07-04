import { Module } from '@nestjs/common';
import { ReviewsRatingsController } from './review-rating.controller';
import { ReviewRatingsService } from './review-rating.service';

@Module({
  controllers: [ReviewsRatingsController],
  providers: [ReviewRatingsService],
})
export class ReviewAndRatingModule {}
