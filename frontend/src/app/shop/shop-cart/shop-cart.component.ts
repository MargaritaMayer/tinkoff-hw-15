import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candle } from 'src/app/shared/interfaces/candle';
import { CartItem } from 'src/app/shared/interfaces/cart-Item';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.less']
})
export class ShopCartComponent {
  @Input()
  public cartItems: CartItem[] | null = [];

  @Input()
  public candles: Candle[] | null = [];

  @Input()
  public sum = 0;
  
  @Output()
  public deleteEvent = new EventEmitter<number>();

  @Output()
  public countEvent = new EventEmitter<CartItem>();

  public deleteItem(id: number) {
    this.deleteEvent.emit(id);
  }  
  
  public changeCount(cartItem: CartItem) {  
    this.countEvent.emit(cartItem);
  }

  public getCandle(cartItem: CartItem) {
    return this.candles?.find(candle => candle.id === cartItem.candleId)
  }
 }
