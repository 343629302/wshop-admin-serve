import { success } from '@libs/db/common/success';
import { SearchHotCreateDot } from '@libs/db/store/search-hot/dot/search-hot-create.dto';
import { SearchHotService } from '@libs/db/store/search-hot/search-hot.service';
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

@Controller('search-hots')
@ApiTags('搜索热词')
export class SearchHotsController {
  constructor(private readonly searchHotService: SearchHotService) {}

  @Get('/find')
  @ApiOperation({ summary: '获取热词信息' })
  async find(@Param(':id') id) {
    const res = await this.searchHotService.findOne({
      _id: id,
    });
    return success({
      res,
    });
  }

  @Post('/create')
  @ApiOperation({ summary: '创建热词' })
  async create(@Body() body: SearchHotCreateDot) {
    const res = await this.searchHotService.created(body);
    return success({
      res,
    });
  }

  @Put('/updata')
  @ApiOperation({ summary: '更新热词' })
  async updata(@Body() body: SearchHotCreateDot) {
    const res = await this.searchHotService.update(
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
