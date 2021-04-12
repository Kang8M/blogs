import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
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

@InputType()
export class FindOneUserInput {
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
