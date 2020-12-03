import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DecorationDeleteDot {
  @ApiProperty({ description: '删除页面' })
  @IsNotEmpty()
  id: string;
}
