import { DbModule } from '@libs/db/db.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { MerchantsModule } from './sotres/merchants/merchants.module';
import { DecorationsModule } from './sotres/decorations/decorations.module';

@Module({
  imports: [DbModule, UsersModule, MerchantsModule, DecorationsModule],
  controllers: [UsersController],
})
export class AppModule {}
