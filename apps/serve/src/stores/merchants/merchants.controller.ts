import { success } from '@libs/db/common/success';
import { MerchantDeleteDot } from '@libs/db/store/merchant/dot/merchant-delete.dto';
import { MerchantUpdateDot } from '@libs/db/store/merchant/dot/merchant-update.dot';
import { MerchantService } from '@libs/db/store/merchant/merchant.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { isValidObjectId } from 'mongoose';

@Controller('merchants')
@ApiTags('商户设置')
export class MerchantsController {
  constructor(private readonly merchantService: MerchantService) {}

  @Get('/list')
  @ApiOperation({ summary: '获取商户列表' })
  async list() {
    const res = await this.merchantService.findAll();
    return success({
      res,
    });
  }

  @Post('/create')
  @ApiOperation({ summary: '创建商户' })
  async create() {
    const res = await this.merchantService.created();
    return success({
      res,
    });
  }

  @Put('/updata')
  @ApiOperation({ summary: '更新商户' })
  async updata(@Body() body: MerchantUpdateDot) {
    const res = await this.merchantService.update(
      '5fc072558b18364b7c33a32f',
      body,
    );
    if (res.n != 1) {
      const title = '更新失败';
      throw new HttpException(title, HttpStatus.BAD_REQUEST);
    }
    return success();
  }

  @Delete('/delete')
  @ApiOperation({ summary: '删除商户' })
  async delete(@Query() query: MerchantDeleteDot) {
    const { id } = query;
    if (!isValidObjectId(id)) {
      const title = '商户不存在';
      throw new HttpException(title, HttpStatus.BAD_REQUEST);
    }
    const res = await this.merchantService.delete(id);
    if (res.n != 1) {
      const title = '删除失败';
      throw new HttpException(title, HttpStatus.BAD_REQUEST);
    }
    return success();
  }
}
