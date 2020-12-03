import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NavigationCreateDot } from './dot/navigation-create.dto';
import { Navigation } from './interface/navigation.interface';

@Injectable()
export class NavigationService {
  constructor(
    @InjectModel('Navigation')
    private readonly navigationModel: Model<Navigation>,
  ) {}

  //创建导航数据
  async created(navigationCreate: NavigationCreateDot) {
    const createdMerchant: Navigation = new this.navigationModel(
      navigationCreate,
    );
    return await createdMerchant.save();
  }

  //更新导航数据
  async update(id: string, navigationUpdate: NavigationCreateDot) {
    return await this.navigationModel.updateOne({ _id: id }, navigationUpdate);
  }

  //查找符合条件的导航
  async findOne(condition: any) {
    return await this.navigationModel.findOne(condition);
  }
}
