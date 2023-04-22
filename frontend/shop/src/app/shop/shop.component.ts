import { Component } from '@angular/core';
import { Candle } from 'src/shared/interfaces/Candle';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less']
})
export class ShopComponent {
  candles: Candle[] = [
    {
      title: 'CONGRATS',
      price: 1390,
      imgPath: 'assets/img/store-item-1.jpg',
      isInStock: true,

    },
    {
      title: 'BIRTHDAY CAKE',
      price: 1590,
      imgPath: 'assets/img/store-item-2.jpg',
      isInStock: true,

    },
    {
      title: 'NAMASTE',
      price: 1290,
      imgPath: 'assets/img/store-item-3.jpg',
      isInStock: true,

    },
    {
      title: 'CANT ADULT',
      price: 1390,
      imgPath: 'assets/img/store-item-4.jpg',
      isInStock: true,

    },
    {
      title: 'LOVE YOU MORE ICE CREAM',
      price: 2090,
      imgPath: 'assets/img/store-item-5.jpg',
      isInStock: false,

    },
    {
      title: 'I SEE IT, I LIKE IT',
      price: 1690,
      imgPath: 'assets/img/store-item-6.jpg',
      isInStock: true,

    },
    {
      title: 'YOU GROW GIRL',
      price: 1290,
      imgPath: 'assets/img/store-item-7.jpg',
      isInStock: true,

    }
    
  ]
}
