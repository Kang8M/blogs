import { Field, ObjectType } from '@nestjs/graphql';
import { Document, FilterQuery, Schema } from 'mongoose';
import { CreateUserInput } from 'src/users/user.input';

export const UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  isAdmin: Boolean,
});

@ObjectType()
export class User extends Document {
  @Field()
  name: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  isAdmin: boolean;
}

export abstract class IQuery {
  abstract users(): User[] | Promise<User[]>;

  abstract user(query?: FilterQuery<User>): User | Promise<User>;
}

export abstract class IMutation {
  abstract createUser(input?: CreateUserInput): User | Promise<User>;
  // abstract updateUserRole(id: number, isAdmin: boolean): User | Promise<User>;
  //
  // abstract updateUserPassword(id: number, password: string): User | Promise<User>;
}

