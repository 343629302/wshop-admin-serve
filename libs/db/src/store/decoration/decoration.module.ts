import { DecorationSchema } from './schema/decoration.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DecorationService } from './decoration.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Decoration', schema: DecorationSchema },
    ]),
  ],
  providers: [DecorationService],
  exports: [DecorationService],
})
export class DecorationModule {}
