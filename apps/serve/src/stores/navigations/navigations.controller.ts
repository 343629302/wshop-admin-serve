import { success } from '@libs/db/common/success';
import { NavigationCreateDot } from '@libs/db/store/navigation/dot/navigation-create.dto';
import { NavigationService } from '@libs/db/store/navigation/navigation.service';
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

@Controller('navigations')
@ApiTags('店铺导航')
export class NavigationsController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('/find')
  @ApiOperation({ summary: '获取导航信息' })
  async find(@Param(':id') id) {
    const res = await this.navigationService.findOne({
      _id: id,
    });
    return success({
      res,
    });
  }

  @Post('/create')
  @ApiOperation({ summary: '创建导航' })
  async create(@Body() body: NavigationCreateDot) {
    const res = await this.navigationService.created(body);
    return success({
      res,
    });
  }

  @Put('/updata')
  @ApiOperation({ summary: '更新导航' })
  async updata(@Body() body: NavigationCreateDot) {
    const res = await this.navigationService.update(
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
