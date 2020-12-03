import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCenterCreateDot } from './dot/user-center-create.dto';
import { UserCenter } from './interface/user-center.interface';

@Injectable()
export class UserCenterService {
  constructor(
    @InjectModel('UserCenter')
    private readonly userCenterModel: Model<UserCenter>,
  ) {}

  //创建用户中心数据
  async created(userCenterCreate: UserCenterCreateDot) {
    const createdMerchant: UserCenter = new this.userCenterModel(
      userCenterCreate,
    );
    return await createdMerchant.save();
  }

  //更新用户中心数据
  async update(id: string, userCenterUpdate: UserCenterCreateDot) {
    return await this.userCenterModel.updateOne({ _id: id }, userCenterUpdate);
  }

  //查找符合条件的用户中心数据
  async findOne(condition: any) {
    return await this.userCenterModel.findOne(condition);
  }
}
