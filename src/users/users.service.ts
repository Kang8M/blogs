import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { Model, FilterQuery } from 'mongoose';
import { CreateUserInput } from 'src/users/user.input';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(input: CreateUserInput): Promise<User> {
    return this.userModel.create(input);
  }

  // async update(
  //   filter: FilterQuery<User>,
  //   update: UpdateQuery<User>,
  // ): Promise<User> {
  //   return this.userModel.updateOne(filter, update);
  // }

  // updateRole(id: number, isAdmin: boolean): User {
  //   const user = this.users.find((user) => user.id === id);
  //   user.isAdmin = isAdmin;
  //   return user;
  // }

  async findAll(): Promise<User[]> {
    return this.userModel.find().lean();
  }

  async findOne(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).exec();
  }

  // findOneByUserName(username: string): User {
  //   return this.users.find((user) => user.username === username);
  // }
}
