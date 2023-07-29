import { Injectable } from '@nestjs/common';
import { User, SerializedUser } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'anson',
      password: 'anson',
    },
    {
      username: 'danny',
      password: 'danny',
    },
    {
      username: 'darek',
      password: 'darek',
    },
    {
      username: 'greco',
      password: 'greco',
    },
    {
      username: 'nivelle',
      password: 'nivelle',
    },
    {
      username: 'harry',
      password: 'harry',
    },
    {
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
}
