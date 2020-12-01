import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserDeleteDot {
  @ApiProperty({ description: '删除用户' })
  @IsNotEmpty()
  id: string;
}
