import { UserModule } from '@libs/db/user/user.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  imports: [UserModule],
  controllers: [UsersController],
})
export class UsersModule {}
