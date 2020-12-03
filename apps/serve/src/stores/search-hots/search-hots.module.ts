import { SearchHotModule } from '@libs/db/store/search-hot/search-hot.module';
import { Module } from '@nestjs/common';
import { SearchHotsController } from './search-hots.controller';

@Module({
  imports: [SearchHotModule],
  controllers: [SearchHotsController],
})
export class SearchHotsModule {}
