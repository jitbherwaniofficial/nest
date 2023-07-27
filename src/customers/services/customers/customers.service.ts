import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'jitbherwani92@gmail.com',
      name: 'jit Bherwani',
    },
    {
      id: 2,
      email: 'harrypotter@gmail.com',
      name: 'Harry Potter',
    },
    {
      id: 3,
      email: 'hermionegranger@gmail.com',
      name: 'Hermione Granger',
    },
    {
      id: 4,
      email: 'ronwiesley@gmail.com',
      name: 'Ron Wiesley',
    },
    {
      id: 5,
      email: 'nivellelongbottom@gmail.com',
      name: 'Nivelle LongBottom',
    },
  ];

  findCustomer() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
