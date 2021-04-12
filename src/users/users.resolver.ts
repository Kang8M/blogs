import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';
import { User } from './user.schema';
import { CreateUserInput } from 'src/users/user.input';
import { FilterQuery } from 'mongoose';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('users')
  async getUsers() {
    return this.usersService.findAll();
  }

  @Query('user')
  async findOne(@Args('query') query: FilterQuery<User>) {
    return this.usersService.findOne(query);
  }

  @Mutation('createUser')
  async create(@Args('input') input: CreateUserInput) {
    return this.usersService.create(input);
  }

  // @Mutation('updateUserRole')
  // async updateRole(
  //   @Args('id', ParseIntPipe)
  //   id: number,
  //   @Args('isAdmin', ParseBoolPipe)
  //   isAdmin: boolean,
  // ): Promise<User> {
  //   const updatedUser = await this.usersService.updateRole(id, isAdmin);
  //   return updatedUser;
  // }
  //
  // @Mutation('updateUserPassword')
  // async updatePassword(
  //   @Args('id', ParseIntPipe)
  //   id: number,
  //   @Args('password')
  //   password: string,
  // ): Promise<User> {
  //   const updatedUser = await this.usersService.updatePassword(id, password);
  //   return updatedUser;
  // }
}
