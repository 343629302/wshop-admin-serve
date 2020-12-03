import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbHost, dbName } from './config/db.configt';
import { DecorationModule } from './store/decoration/decoration.module';
import { MerchantModule } from './store/merchant/merchant.module';
import { UserModule } from './user/user.module';
import { NavigationModule } from './store/navigation/navigation.module';
import { UserCenterModule } from './store/user-center/user-center.module';
import { SearchHotModule } from './store/search-hot/search-hot.module';
import { ThemeModule } from './store/theme/theme.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${dbHost}${dbName}`),
    UserModule,
    MerchantModule,
    DecorationModule,
    NavigationModule,
    UserCenterModule,
    SearchHotModule,
    ThemeModule,
  ],
  exports: [
    UserModule,
    MerchantModule,
    DecorationModule,
    NavigationModule,
    UserCenterModule,
    SearchHotModule,
    ThemeModule,
  ],
})
export class DbModule {}
