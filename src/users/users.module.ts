import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from 'src/users/users.resolver';
import { databaseProviders } from 'src/database/database.providers';
import { userProviders } from 'src/users/user.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    UsersService,
    UsersResolver,
    ...databaseProviders,
    ...userProviders,
  ],
  exports: [UsersService],
})
export class UsersModule {}
