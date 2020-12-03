import { ThemeModule } from './../../../../../libs/db/src/store/theme/theme.module';
import { Module } from '@nestjs/common';
import { ThemesController } from './themes.controller';

@Module({
  imports: [ThemeModule],
  controllers: [ThemesController],
})
export class ThemesModule {}
