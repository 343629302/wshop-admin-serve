import { Test, TestingModule } from '@nestjs/testing';
import { DecorationsController } from './decorations.controller';

describe('DecorationsController', () => {
  let controller: DecorationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DecorationsController],
    }).compile();

    controller = module.get<DecorationsController>(DecorationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
