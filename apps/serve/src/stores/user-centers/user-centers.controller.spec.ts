import { Test, TestingModule } from '@nestjs/testing';
import { UserCentersController } from './user-centers.controller';

describe('UserCentersController', () => {
  let controller: UserCentersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCentersController],
    }).compile();

    controller = module.get<UserCentersController>(UserCentersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
