import { Module } from '@nestjs/common';
import {InMemoryDBModule} from '@nestjs-addons/in-memory-db'
import { CandlesController } from './candles.controller';
@Module({
  imports: [InMemoryDBModule.forRoot()],
  controllers: [CandlesController],
  providers: [],
})
export class CandlesModule {}