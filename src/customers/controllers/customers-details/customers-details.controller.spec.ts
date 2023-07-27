import { Test, TestingModule } from '@nestjs/testing';
import { CustomersDetailsController } from './customers-details.controller';

describe('CustomersDetailsController', () => {
  let controller: CustomersDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersDetailsController],
    }).compile();

    controller = module.get<CustomersDetailsController>(CustomersDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
