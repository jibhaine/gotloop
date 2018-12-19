import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { LoopModule } from './loop/loop.module';

@Module({
  imports: [DatabaseModule, LoopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
