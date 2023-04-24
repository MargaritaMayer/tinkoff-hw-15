import { Module } from '@nestjs/common';
import { CartItemsModule } from './cartItems/cartItems.module';
import { CandlesModule } from './candles/candles.module';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CartItemsModule,
    CandlesModule,
    RouterModule.register([
      {
        path: 'candles',
        module: CandlesModule,
      },
      {
        path: 'cartItems',
        module: CartItemsModule,
      },
    ]),
    
    TypeOrmModule.forRoot(
      {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '123456',
          database: 'defaultdb',
          entities: [
              __dirname + '/../**/*.entity{.ts,.js}',
          ],
          synchronize: true,
      }
  )
  ],
  providers: [],
})
export class AppModule {}
