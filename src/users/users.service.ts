import { Injectable } from '@nestjs/common';
import { User } from '../graphql.schema';

@Injectable()
export class UsersService {
  private readonly users: Array<User> = [
    {
      id: 1,
      username: 'admin',
      password: '123456',
      isAdmin: true,
    },
  ];

  create(user: User): User {
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  updatePassword(id: number, password: string): User {
    const user = this.users.find((user) => user.id === id);
    user.password = password;
    return user;
  }

  updateRole(id: number, isAdmin: boolean): User {
    const user = this.users.find((user) => user.id === id);
    user.isAdmin = isAdmin;
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  findOneByUserName(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
