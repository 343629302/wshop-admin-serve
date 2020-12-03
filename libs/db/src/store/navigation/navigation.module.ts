import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NavigationService } from './navigation.service';
import { NavigationSchema } from './schema/navigation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Navigation', schema: NavigationSchema },
    ]),
  ],
  providers: [NavigationService],
  exports: [NavigationService],
})
export class NavigationModule {}
