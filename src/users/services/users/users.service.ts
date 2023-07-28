import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
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
      username: 'Harry',
      password: 'Harry',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
