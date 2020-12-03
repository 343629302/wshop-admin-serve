import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThemeSchema } from './schema/theme.schema';
import { ThemeService } from './theme.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Theme', schema: ThemeSchema }]),
  ],
  providers: [ThemeService],
  exports: [ThemeService],
})
export class ThemeModule {}
