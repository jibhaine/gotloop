import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoopModule } from './loop/loop.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
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
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
