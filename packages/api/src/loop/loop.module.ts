import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoopController } from './loop.controller';
import { LoopEntity } from './loop.entity';
import { Comment } from './comment.entity';
import { UserEntity } from '../user/user.entity';
import { FollowsEntity } from '../profile/follows.entity';
import { LoopService } from './loop.service';
import { AuthMiddleware } from '../user/auth.middleware';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LoopEntity, Comment, UserEntity, FollowsEntity]),
    UserModule,
  ],
  providers: [LoopService],
  controllers: [LoopController],
})
export class LoopModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'loops/feed', method: RequestMethod.GET },
        { path: 'loops', method: RequestMethod.POST },
        { path: 'loops/:slug', method: RequestMethod.DELETE },
        { path: 'loops/:slug', method: RequestMethod.PUT },
        { path: 'loops/:slug/comments', method: RequestMethod.POST },
        { path: 'loops/:slug/comments/:id', method: RequestMethod.DELETE },
        { path: 'loops/:slug/favorite', method: RequestMethod.POST },
        { path: 'loops/:slug/favorite', method: RequestMethod.DELETE },
      );
  }
}
