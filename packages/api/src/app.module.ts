import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LoopModule } from './loop/loop.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    DatabaseModule,
    LoopModule,
    /*
    UserModule,
    ProfileModule,
    TagModule,
    */
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
