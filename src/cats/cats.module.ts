import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from 'src/cats/cats.service';
import { CatMiddleware } from 'src/cats/middleware/cat.middleware';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(CatMiddleware).forRoutes(CatsController);
  }
}
