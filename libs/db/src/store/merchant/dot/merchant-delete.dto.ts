import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MerchantDeleteDot {
  @ApiProperty({ description: '删除商户' })
  @IsNotEmpty()
  id: string;
}
