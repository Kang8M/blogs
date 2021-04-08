import { UpdateUserPasswordInput } from 'src/graphql.schema';
import { Min } from 'class-validator';

export class UpdateRoleUserDto extends UpdateUserPasswordInput {
  @Min(1)
  id: number;

  password: string;
}
