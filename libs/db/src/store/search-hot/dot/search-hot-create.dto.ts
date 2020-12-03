import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SearchHotCreateDot {
  @ApiProperty({ description: '热词列表' })
  hotList: any[];

  @ApiProperty({ description: '商户' })
  @IsNotEmpty({ message: '商户号不能为空' })
  store: string;
}
