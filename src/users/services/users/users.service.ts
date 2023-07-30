import { Injectable } from '@nestjs/common';
import { User, SerializedUser } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'anson',
      password: 'anson',
    },
    {
      id: 2,
      username: 'danny',
      password: 'danny',
    },
    {
      id: 3,
      username: 'darek',
      password: 'darek',
    },
    {
      id: 4,
      username: 'greco',
      password: 'greco',
    },
    {
      id: 5,
      username: 'nivelle',
      password: 'nivelle',
    },
    {
      id: 6,
      username: 'harry',
      password: 'harry',
    },
    {
      id: 7,
      username: 'hermione',
      password: 'hermione',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
