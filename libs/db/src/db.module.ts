import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbHost, dbName } from './config/db.configt';
import { DecorationModule } from './sotre/decoration/decoration.module';
import { MerchantModule } from './sotre/merchant/merchant.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${dbHost}${dbName}`),
    UserModule,
    MerchantModule,
    DecorationModule
  ],
})
export class DbModule {}
