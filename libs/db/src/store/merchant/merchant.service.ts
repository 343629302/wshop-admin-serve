import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MerchantUpdateDot } from './dot/merchant-update.dot';
import { Merchant } from './interface/merchant.interface';

@Injectable()
export class MerchantService {
  constructor(
    @InjectModel('Merchant') private readonly merchantModel: Model<Merchant>,
  ) {}

  //创建商户数据
  async created() {
    const createdMerchant: Merchant = new this.merchantModel();
    return await createdMerchant.save();
  }

  //更新商户数据
  async update(id: string, merchantUpdate: MerchantUpdateDot) {
    return await this.merchantModel.updateOne({ _id: id }, merchantUpdate);
  }

  //查询全部商户
  async findAll() {
    return await this.merchantModel.find().exec();
  }

  //查找符合条件的商户
  async findOne(condition: any) {
    return await this.merchantModel.findOne(condition);
  }

  //删除商户
  async delete(id: string) {
    return await this.merchantModel.deleteOne({
      _id: id,
    });
  }
}
