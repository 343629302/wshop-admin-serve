import { Test, TestingModule } from '@nestjs/testing';
import { DecorationService } from './decoration.service';

describe('DecorationService', () => {
  let service: DecorationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecorationService],
    }).compile();

    service = module.get<DecorationService>(DecorationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
