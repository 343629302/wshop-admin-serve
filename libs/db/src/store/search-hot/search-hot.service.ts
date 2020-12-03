import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SearchHotCreateDot } from './dot/search-hot-create.dto';
import { SearchHot } from './interface/search-hot.interface';

@Injectable()
export class SearchHotService {
  constructor(
    @InjectModel('SearchHot')
    private readonly searchHotModel: Model<SearchHot>,
  ) {}

  //创建热词数据
  async created(searchHotCreate: SearchHotCreateDot) {
    const createdMerchant: SearchHot = new this.searchHotModel(searchHotCreate);
    return await createdMerchant.save();
  }

  //更新热词数据
  async update(id: string, searchHotUpdate: SearchHotCreateDot) {
    return await this.searchHotModel.updateOne({ _id: id }, searchHotUpdate);
  }

  //查找符合条件的热词数组
  async findOne(condition: any) {
    return await this.searchHotModel.findOne(condition);
  }
}
