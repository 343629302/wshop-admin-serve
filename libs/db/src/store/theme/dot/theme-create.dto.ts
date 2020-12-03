import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ThemeCreateDot {
  @ApiProperty({ description: '自定义颜色' })
  customColor: string[];

  @ApiProperty({ description: '主题颜色' })
  @IsNotEmpty({ message: '当前主题颜色不能为空' })
  styleType: number;

  @ApiProperty({ description: '商户' })
  @IsNotEmpty({ message: '商户号不能为空' })
  store: string;
}
