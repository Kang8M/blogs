import { CreateUserInput } from 'src/graphql.schema';

export class CreateUserDto extends CreateUserInput {
  username: string;
  password: string;
}