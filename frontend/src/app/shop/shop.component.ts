import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Candle} from 'src/shared/interfaces/Candle';
import { CartItem } from 'src/shared/interfaces/CartItem';
import { CandlesService } from 'src/shared/services/candles.service';
import { CartService } from 'src/shared/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less']
})


export class ShopComponent implements OnInit{

  public isShowCandles: boolean = true;

  constructor(
    public candlesService: CandlesService,
    public cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.candlesService.initialize();
  }

  addCartItem(item: CartItem): void {
    this.isShowCandles = false;
    this.cartService.addCartItem(item);
  }

  public showCandles(): void {
    this.isShowCandles = true;
  }

  public hideCandles(): void {
    this.isShowCandles = false;
  }

  public deleteCartItem(id: number): void {
    this.cartService.deleteItem(id);
  } 
  
  public updateCartItem(cartItem: CartItem){
    this.cartService.updateCount(cartItem);
  } 
}
