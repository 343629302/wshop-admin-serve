import { MerchantSchema } from './schema/merchant.schema';
import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Merchant', schema: MerchantSchema }]),
  ],
  providers: [MerchantService],
  exports: [MerchantService],
})
export class MerchantModule {}
