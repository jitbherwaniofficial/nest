import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersDetailsController } from './controllers/customers-details/customers-details.controller';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController, CustomersDetailsController],
  providers: [CustomersService],
})
export class CustomersModule {}
