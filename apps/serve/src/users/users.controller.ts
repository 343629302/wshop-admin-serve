import { success } from '@libs/db/common/success';
import { UserCreateDot } from '@libs/db/user/dot/user-create.dto';
import { UserDeleteDot } from '@libs/db/user/dot/user-delete.dto';
import { UserUpdateDot } from '@libs/db/user/dot/user-update.dto';
import { UserService } from '@libs/db/user/user.service';
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

@Controller('users')
@ApiTags('后台端用户')
export class UsersController {
  constructor(private readonly uesrService: UserService) {}

  @Get('/login')
  @ApiOperation({ summary: '用户登陆' })
  async login() {
    console.log('登录');
    return {
      status: 200,
    };
  }

  @Post('/create')
  @ApiOperation({ summary: '创建管理员' })
  async create(@Body() body: UserCreateDot) {
    const res = await this.uesrService.created(Object.assign({}, body));
    return success({
      res,
    });
  }

  @Post('/staff')
  @ApiOperation({ summary: '创建员工' })
  async staff(@Body() body: UserCreateDot) {
    const res = await this.uesrService.created(
      Object.assign({}, body, {
        identity: '',
      }),
    );
    return success({
      res,
    });
  }

  @Put('/updata')
  @ApiOperation({ summary: '更新用户' })
  async updata(@Body() body: UserUpdateDot) {
    const res = await this.uesrService.update('5fbf560599f7bc0dc0b18250', body);
    if (res.n != 1) {
      const title = '更新失败';
      throw new HttpException(title, HttpStatus.BAD_REQUEST);
    }
    return success();
  }

  @Delete('/delete')
  @ApiOperation({ summary: '删除用户' })
  async delete(@Query() query: UserDeleteDot) {
    const { id } = query;
    if (!isValidObjectId(id)) {
      const title = '用户不存在';
      throw new HttpException(title, HttpStatus.BAD_REQUEST);
    }
    const res = await this.uesrService.delete(id);
    if (res.n != 1) {
      const title = '删除失败';
      throw new HttpException(title, HttpStatus.BAD_REQUEST);
    }
    return success();
  }
}
