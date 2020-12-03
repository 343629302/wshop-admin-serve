import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DecorationCreateDot {
  @ApiProperty({ description: '页面标题' })
  @IsNotEmpty({ message: '请输入页面标题' })
  title: string;

  @ApiProperty({ description: '背景颜色' })
  background: string;

  @ApiProperty({ description: '分享描述' })
  shareTitle: string;

  @ApiProperty({ description: '分享图片' })
  shareImage: string;

  @ApiProperty({ description: '页面装修' })
  customize: any[];

  @ApiProperty({ description: '商户' })
  store: string;
}
