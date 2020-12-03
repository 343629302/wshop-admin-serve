import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MerchantUpdateDot {
  @ApiProperty({ description: '商户名称' })
  @IsNotEmpty({ message: '请输入商户名称' })
  name: string;

  @ApiProperty({ description: 'LoGo图' })
  logo: string;

  @ApiProperty({ description: '地址' })
  adress: string[];

  @ApiProperty({ description: '简介' })
  introduce: string;
}
