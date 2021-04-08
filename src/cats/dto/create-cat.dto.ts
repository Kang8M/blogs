import { CreateCatInput } from 'src/graphql.schema';
import { Min } from 'class-validator';

export class CreateCatDto extends CreateCatInput {
  @Min(1)
  age: number;
}