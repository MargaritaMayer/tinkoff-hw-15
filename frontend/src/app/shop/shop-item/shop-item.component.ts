import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candle, CartItem, IdCount } from 'src/shared/interfaces/Candle';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.less']
})
export class ShopItemComponent {
  public count = 1;

  @Input()
  public candle : Candle | null = null;

  @Output()
  public clickAddCandle = new EventEmitter<CartItem>();  

  public hideCandles(): void {    
    if (this.candle) {
      this.clickAddCandle.emit({...this.candle, count: this.count, id: 0});
      this.count = 1;
    }
  } 
  
  public changeCount(count: number) {
      this.count = count;
  }
}
