import { Module } from '@nestjs/common';
import {InMemoryDBModule} from '@nestjs-addons/in-memory-db'
import { CartItemsController } from './cartItems.controller';
@Module({
  imports: [InMemoryDBModule.forRoot()],
  controllers: [CartItemsController],
  providers: [],
})
export class CartItemsModule {}