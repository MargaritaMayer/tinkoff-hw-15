import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candle } from 'src/shared/interfaces/Candle';
import { CartItem } from 'src/shared/interfaces/CartItem';

@Component({
  selector: 'app-shop-cart-item',
  templateUrl: './shop-cart-item.component.html',
  styleUrls: ['./shop-cart-item.component.less']
})
export class ShopCartItemComponent {
  @Input()
  public cartItem : CartItem | null = null;

  @Input()
  public candle : Candle | undefined = undefined;

  @Output()
  public deleteEvent = new EventEmitter<number>();

  @Output()
  public countEvent = new EventEmitter<CartItem>();

  delete(): void {
    if (this.cartItem){
      this.deleteEvent.emit(this.cartItem.candleId);
    }
  }  

  changeCount(count: number){
    if (this.cartItem){
      this.countEvent.emit({candleId: this.cartItem.candleId, count: count});
    }
  }
}
