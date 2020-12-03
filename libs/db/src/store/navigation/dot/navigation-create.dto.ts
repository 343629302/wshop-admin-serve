import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class NavigationCreateDot {
  @ApiProperty({ description: '已选颜色' })
  activeColor: string;

  @ApiProperty({ description: '未选颜色' })
  inactiveColor: string;

  @ApiProperty({ description: '导航列表' })
  nav: any[];

  @ApiProperty({ description: '商户' })
  @IsNotEmpty({ message: '商户号不能为空' })
  store: string;
}
