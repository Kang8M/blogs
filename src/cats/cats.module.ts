import { Module } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { OwnersModule } from 'src/owners/owners.module';
import { CatsResolver } from 'src/cats/cats.resolver';
import { CatOwnerResolver } from 'src/cats/cat-owner.resolver';

@Module({
  imports: [OwnersModule],
  providers: [CatsService, CatsResolver, CatOwnerResolver],
})
export class CatsModule {}
