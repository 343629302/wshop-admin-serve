import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ThemeCreateDot } from './dot/theme-create.dto';
import { Theme } from './interface/theme.interface';

@Injectable()
export class ThemeService {
  constructor(
    @InjectModel('Theme')
    private readonly themeModel: Model<Theme>,
  ) {}

  //创建主题颜色
  async created(themeCreate: ThemeCreateDot) {
    const createdMerchant: Theme = new this.themeModel(themeCreate);
    return await createdMerchant.save();
  }

  //更新主题颜色
  async update(id: string, themeUpdate: ThemeCreateDot) {
    return await this.themeModel.updateOne({ _id: id }, themeUpdate);
  }

  //查找符合条件的主题颜色
  async findOne(condition: any) {
    return await this.themeModel.findOne(condition);
  }
}
