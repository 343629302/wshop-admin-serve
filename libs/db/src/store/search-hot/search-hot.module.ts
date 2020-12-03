import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchHotSchema } from './schema/search-hot.schema';
import { SearchHotService } from './search-hot.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'SearchHot', schema: SearchHotSchema }]),
  ],
  providers: [SearchHotService],
  exports: [SearchHotService],
})
export class SearchHotModule {}
