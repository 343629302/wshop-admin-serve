import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DecorationCreateDot } from './dot/decoration-create.dto';
import { Decoration } from './interface/decoration.interface';

@Injectable()
export class DecorationService {
  constructor(
    @InjectModel('Decoration')
    private readonly merchantModel: Model<Decoration>,
  ) {}
  //创建页面数据
  async created(decorationCreate: DecorationCreateDot) {
    const createdUser = new this.merchantModel(decorationCreate);
    return await createdUser.save();
  }

  //更新页面数据
  async update(id: string, decorationUpdate: DecorationCreateDot) {
    return await this.merchantModel.updateOne({ _id: id }, decorationUpdate);
  }

  //查询全部页面
  async findAll() {
    return await this.merchantModel.find().exec();
  }

  //查找符合条件的页面
  async findOne(condition: any) {
    return await this.merchantModel.findOne(condition);
  }

  //删除页面
  async delete(id: string) {
    return await this.merchantModel.deleteOne({
      _id: id,
    });
  }
}
