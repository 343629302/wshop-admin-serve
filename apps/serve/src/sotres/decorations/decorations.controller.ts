import { success } from '@libs/db/common/success';
import { DecorationService } from '@libs/db/sotre/decoration/decoration.service';
import { DecorationCreateDot } from '@libs/db/sotre/decoration/dot/decoration-create.dto';
import { DecorationDeleteDot } from '@libs/db/sotre/decoration/dot/decoration-delete.dto';
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

@Controller('decorations')
@ApiTags('装修页面')
export class DecorationsController {
  constructor(private readonly decorationService: DecorationService) {}

  @Get('/list')
  @ApiOperation({ summary: '页面列表' })
  async list() {
    const res = await this.decorationService.findAll();
    return success({
      res,
    });
  }

  @Post('/create')
  @ApiOperation({ summary: '创建页面' })
  async create(@Body() body: DecorationCreateDot) {
    const res = await this.decorationService.created(body);
    return success({
      res,
    });
  }

  @Put('/updata')
  @ApiOperation({ summary: '更新页面' })
  async updata(@Body() body: DecorationCreateDot) {
    const res = await this.decorationService.update(
      '5fbf560599f7bc0dc0b18250',
      body,
    );
    if (res.n != 1) {
      const title = '更新失败';
      throw new HttpException(title, HttpStatus.BAD_REQUEST);
    }
    return success();
  }

  @Delete('/delete')
  @ApiOperation({ summary: '删除页面' })
  async delete(@Query() query: DecorationDeleteDot) {
    const { id } = query;
    if (!isValidObjectId(id)) {
      const title = '页面不存在';
      throw new HttpException(title, HttpStatus.BAD_REQUEST);
    }
    const res = await this.decorationService.delete(id);
    if (res.n != 1) {
      const title = '删除失败';
      throw new HttpException(title, HttpStatus.BAD_REQUEST);
    }
    return success();
  }
}
