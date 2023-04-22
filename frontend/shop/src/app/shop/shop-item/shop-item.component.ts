import { Component, Input } from '@angular/core';
import { Candle } from 'src/shared/interfaces/Candle';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.less']
})
export class ShopItemComponent {
  @Input()
  candle : Candle | null = null;

}
