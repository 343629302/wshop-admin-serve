import { DbModule } from '@libs/db/db.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { MerchantsModule } from './stores/merchants/merchants.module';
import { DecorationsModule } from './stores/decorations/decorations.module';
import { NavigationsModule } from './stores/navigations/navigations.module';
import { UserCentersModule } from './stores/user-centers/user-centers.module';
import { SearchHotsModule } from './stores/search-hots/search-hots.module';
import { ThemesModule } from './stores/themes/themes.module';

@Module({
  imports: [DbModule, UsersModule, MerchantsModule, DecorationsModule, NavigationsModule, UserCentersModule, SearchHotsModule, ThemesModule],
  controllers: [UsersController],
})
export class AppModule {}
