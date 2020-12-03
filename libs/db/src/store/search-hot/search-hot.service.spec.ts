import { Test, TestingModule } from '@nestjs/testing';
import { SearchHotService } from './search-hot.service';

describe('SearchHotService', () => {
  let service: SearchHotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchHotService],
    }).compile();

    service = module.get<SearchHotService>(SearchHotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
