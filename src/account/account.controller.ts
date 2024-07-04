import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('account')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Patch('profile')
  updateProfile(@Body() updateProfileDto: UpdateProfileDto) {
    // return this.accountService.updateProfile(updateProfileDto);
  }

  @Post('change-password')
  changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    // return this.accountService.changePassword(changePasswordDto);
  }

  @Get('addresses')
  getAddresses() {
    // return this.accountService.getAddresses();
  }

  // @Post('addresses')
  // addAddress(@Body() manageAddressDto: ManageAddressDto) {
  //   // return this.accountService.addAddress(manageAddressDto);
  // }

  // @Patch('addresses/:addressId')
  // updateAddress(
  //   @Param('addressId') addressId: string,
  //   @Body() manageAddressDto: ManageAddressDto,
  // ) {
  //   // return this.accountService.updateAddress(addressId, manageAddressDto);
  // }

  @Delete('addresses/:addressId')
  deleteAddress(@Param('addressId') addressId: string) {
    // return this.accountService.deleteAddress(addressId);
  }
}
