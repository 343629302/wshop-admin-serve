import { NavigationModule } from '@libs/db/store/navigation/navigation.module';
import { Module } from '@nestjs/common';
import { NavigationsController } from './navigations.controller';

@Module({
  imports: [NavigationModule],
  controllers: [NavigationsController],
})
export class NavigationsModule {}
