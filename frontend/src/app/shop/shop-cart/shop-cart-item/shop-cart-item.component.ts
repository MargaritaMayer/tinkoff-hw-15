import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem, IdCount } from 'src/shared/interfaces/Candle';

@Component({
  selector: 'app-shop-cart-item',
  templateUrl: './shop-cart-item.component.html',
  styleUrls: ['./shop-cart-item.component.less']
})
export class ShopCartItemComponent {
  @Input()
  public cartItem : CartItem | null = null;

  @Output()
  public deleteEvent = new EventEmitter<number>();

  @Output()
  public countEvent = new EventEmitter<IdCount>();

  delete(): void {
    if (this.cartItem){
      this.deleteEvent.emit(this.cartItem.id);
    }
  }  

  changeCount(count: number){
    if (this.cartItem){
      this.countEvent.emit({id: this.cartItem.id, count: count});
    }
  }
}
