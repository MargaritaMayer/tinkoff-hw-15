import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CartItem, IdCount } from 'src/shared/interfaces/Candle';
import { ShopCartItemComponent } from './shop-cart-item/shop-cart-item.component';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.less']
})
export class ShopCartComponent {
  @Input()
  public cartItems: CartItem[] | null = [];

  @Input()
  public sum: number = 0;
  
  @Output()
  public deleteEvent = new EventEmitter<number>();

  @Output()
  public countEvent = new EventEmitter<IdCount>();

  public deleteItem(id: number) {
    this.deleteEvent.emit(id);
  }  
  
  public changeCount(idCount: IdCount) {  
    this.countEvent.emit(idCount);
  }
 }
