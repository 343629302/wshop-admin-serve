import { DbModule } from '@libs/db/db.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DbModule, UsersModule],
  controllers: [UsersController],
})
export class AppModule {}
