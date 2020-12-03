import { Test, TestingModule } from '@nestjs/testing';
import { SearchHotsController } from './search-hots.controller';

describe('SearchHotsController', () => {
  let controller: SearchHotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchHotsController],
    }).compile();

    controller = module.get<SearchHotsController>(SearchHotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
