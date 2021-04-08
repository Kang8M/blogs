import { ParseBoolPipe, ParseIntPipe } from '@nestjs/common';
import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from '../graphql.schema';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('users')
  async getUsers() {
    return this.usersService.findAll();
  }

  @Query('user')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<User> {
    return this.usersService.findOneById(id);
  }

  @Mutation('createUser')
  async create(@Args('createUserInput') args: CreateUserDto): Promise<User> {
    const createdUser = await this.usersService.create(args);
    return createdUser;
  }

  @Mutation('updateUserRole')
  async updateRole(
    @Args('id', ParseIntPipe)
    id: number,
    @Args('isAdmin', ParseBoolPipe)
    isAdmin: boolean,
  ): Promise<User> {
    const updatedUser = await this.usersService.updateRole(id, isAdmin);
    return updatedUser;
  }

  @Mutation('updateUserPassword')
  async updatePassword(
    @Args('id', ParseIntPipe)
    id: number,
    @Args('password')
    password: string,
  ): Promise<User> {
    const updatedUser = await this.usersService.updatePassword(id, password);
    return updatedUser;
  }
}
