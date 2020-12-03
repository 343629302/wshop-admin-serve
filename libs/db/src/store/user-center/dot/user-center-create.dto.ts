import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserCenterCreateDot {
  @ApiProperty({ description: '头部风格' })
  headStyle: string;

  @ApiProperty({ description: '历史内容显示' })
  historyShow: boolean;

  @ApiProperty({ description: '图片导航1显示' })
  navOneShow: boolean;

  @ApiProperty({ description: '图片导航1图片' })
  navOneImage: string;

  @ApiProperty({ description: '图片导航1链接' })
  navOneLink: string;

  @ApiProperty({ description: '图片导航2显示' })
  navTwoShow: boolean;

  @ApiProperty({ description: '图片导航2图片' })
  navTwoImage: string;

  @ApiProperty({ description: '图片导航2链接' })
  navTwoLink: string;

  @ApiProperty({ description: '菜单样式' })
  menuStyle: number;

  @ApiProperty({ description: '菜单间隔' })
  menuHasInterval: boolean;

  @ApiProperty({ description: '菜单列表' })
  meunList: any[];

  @ApiProperty({ description: '商户' })
  @IsNotEmpty({ message: '商户号不能为空' })
  store: string;
}
