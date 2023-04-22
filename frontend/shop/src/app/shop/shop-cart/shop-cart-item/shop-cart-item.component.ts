import { Component, Input } from '@angular/core';
import { CartItem } from 'src/shared/interfaces/CartItem';

@Component({
  selector: 'app-shop-cart-item',
  templateUrl: './shop-cart-item.component.html',
  styleUrls: ['./shop-cart-item.component.less']
})
export class ShopCartItemComponent {
  @Input()
  cartItem : CartItem | null = null;
}
