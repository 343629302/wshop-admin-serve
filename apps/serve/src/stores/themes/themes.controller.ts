import { success } from '@libs/db/common/success';
import { ThemeCreateDot } from '@libs/db/store/theme/dot/theme-create.dto';
import { ThemeService } from '@libs/db/store/theme/theme.service';
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

@Controller('themes')
@ApiTags('主题颜色')
export class ThemesController {
  constructor(private readonly themeService: ThemeService) {}

  @Get('/find')
  @ApiOperation({ summary: '获取主题颜色' })
  async find(@Param(':id') id) {
    const res = await this.themeService.findOne({
      _id: id,
    });
    return success({
      res,
    });
  }

  @Post('/create')
  @ApiOperation({ summary: '创建主题颜色' })
  async create(@Body() body: ThemeCreateDot) {
    const res = await this.themeService.created(body);
    return success({
      res,
    });
  }

  @Put('/updata')
  @ApiOperation({ summary: '更新主题颜色' })
  async updata(@Body() body: ThemeCreateDot) {
    const res = await this.themeService.update(
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
