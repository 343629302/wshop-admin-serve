import { DecorationModule } from '@libs/db/sotre/decoration/decoration.module';
import { Module } from '@nestjs/common';
import { DecorationsController } from './decorations.controller';

@Module({
  imports: [DecorationModule],
  controllers: [DecorationsController],
})
export class DecorationsModule {}
