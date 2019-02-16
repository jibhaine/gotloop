import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LoopModule } from './loop/loop.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    DatabaseModule,
    LoopModule,
    UserModule,
    ProfileModule,
    TagModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
