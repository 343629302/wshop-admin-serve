import { UserCenterModule } from '@libs/db/store/user-center/user-center.module';
import { Module } from '@nestjs/common';
import { UserCentersController } from './user-centers.controller';

@Module({
  imports: [UserCenterModule],
  controllers: [UserCentersController],
})
export class UserCentersModule {}
