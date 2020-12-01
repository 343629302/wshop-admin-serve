import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateDot } from './dot/user-create.dto';
import { UserUpdateDot } from './dot/user-update.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  //创建用户数据
  async created(userCreateDot: UserCreateDot) {
    const createdUser = new this.userModel(userCreateDot);
    return await createdUser.save();
  }

  //更新用户数据
  async update(id: string, userCreateDot: UserUpdateDot) {
    return await this.userModel.updateOne({ _id: id }, userCreateDot);
  }

  //查询全部用户
  async findAll() {
    return await this.userModel.find().exec();
  }

  //查找符合条件的用户
  async findOne(condition: any) {
    return await this.userModel.findOne(condition);
  }

  //删除用户
  async delete(id: string) {
    return await this.userModel.deleteOne({
      _id: id,
    });
  }
}
