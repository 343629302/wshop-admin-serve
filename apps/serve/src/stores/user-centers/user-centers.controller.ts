import { success } from '@libs/db/common/success';
import { UserCenterCreateDot } from '@libs/db/store/user-center/dot/user-center-create.dto';
import { UserCenterService } from '@libs/db/store/user-center/user-center.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user-centers')
@ApiTags('用户中心')
export class UserCentersController {
  constructor(private readonly userCenterService: UserCenterService) {}

  @Get('/find')
  @ApiOperation({ summary: '获取用户中心信息' })
  async find(@Param(':id') id) {
    const res = await this.userCenterService.findOne({
      _id: id,
    });
    return success({
      res,
    });
  }

  @Post('/create')
  @ApiOperation({ summary: '创建用户中心' })
  async create(@Body() body: UserCenterCreateDot) {
    const res = await this.userCenterService.created(body);
    return success({
      res,
    });
  }

  @Put('/updata')
  @ApiOperation({ summary: '更新用户中心' })
  async updata(@Body() body: UserCenterCreateDot) {
    const res = await this.userCenterService.update(
      '5fc072558b18364b7c33a32f',
      body,
    );
    if (res.n != 1) {
      const title = '更新失败';
      throw new HttpException(title, HttpStatus.BAD_REQUEST);
    }
    return success();
  }
}
