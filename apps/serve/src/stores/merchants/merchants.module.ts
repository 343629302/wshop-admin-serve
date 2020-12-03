import { MerchantModule } from '@libs/db/store/merchant/merchant.module';
import { Module } from '@nestjs/common';
import { MerchantsController } from './merchants.controller';

@Module({
  imports: [MerchantModule],
  controllers: [MerchantsController],
})
export class MerchantsModule {}
