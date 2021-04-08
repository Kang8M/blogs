import { UpdateUserRoleInput } from 'src/graphql.schema';
import { Min } from 'class-validator';

export class UpdateRoleUserDto extends UpdateUserRoleInput {
  @Min(1)
  id: number;

  isAdmin?: boolean;
}
