import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserCenterSchema } from './schema/user-center.schema';
import { UserCenterService } from './user-center.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserCenter', schema: UserCenterSchema },
    ]),
  ],
  providers: [UserCenterService],
  exports: [UserCenterService],
})
export class UserCenterModule {}
