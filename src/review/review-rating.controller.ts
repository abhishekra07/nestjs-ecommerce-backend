import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReviewRatingsService } from './review-rating.service';
import { AddReviewDto } from './dto/add-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@ApiTags('review-and-rating')
@Controller('products/:productId')
export class ReviewsRatingsController {
  constructor(private readonly reviewsRatingsService: ReviewRatingsService) {}

  @Post('reviews')
  addReview(
    @Param('productId') productId: string,
    @Body() addReviewDto: AddReviewDto,
  ) {
    // return this.reviewsRatingsService.addReview(productId, addReviewDto);
  }

  @Get('reviews')
  getReviews(@Param('productId') productId: string) {
    // return this.reviewsRatingsService.getReviews(productId);
  }

  @Patch('reviews/:reviewId')
  updateReview(
    @Param('reviewId') reviewId: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    // return this.reviewsRatingsService.updateReview(reviewId, updateReviewDto);
  }

  @Delete('reviews/:reviewId')
  deleteReview(@Param('reviewId') reviewId: string) {
    // return this.reviewsRatingsService.deleteReview(reviewId);
  }
}
