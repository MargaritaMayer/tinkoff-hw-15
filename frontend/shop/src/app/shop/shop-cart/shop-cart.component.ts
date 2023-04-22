import { Component } from '@angular/core';
import { CartItem } from 'src/shared/interfaces/CartItem';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.less']
})
export class ShopCartComponent {

  cartItems: CartItem[] = [
    {
      title: 'CONGRATS',
      price: 1390,
      imgPath: 'assets/img/store-item-1.jpg',
      count: 1,

    },
    {
      title: 'LOVE YOU MORE ICE CREAM',
      price: 2090,
      imgPath: 'assets/img/store-item-5.jpg',
      count: 2,

    },
    {
      title: 'I SEE IT, I LIKE IT',
      price: 1690,
      imgPath: 'assets/img/store-item-6.jpg',
      count: 1,
    },
    {
      title: 'I SEE IT, I LIKE IT',
      price: 1690,
      imgPath: 'assets/img/store-item-6.jpg',
      count: 1,
    },
  ]
}
