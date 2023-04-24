import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Candle, CartItem, IdCount } from 'src/shared/interfaces/Candle';
import { CandlesService } from 'src/shared/services/candles.service';
import { CartItemsService } from 'src/shared/services/cartItems.service';



const dataCart: CartItem[] = []; 

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less']
})


export class ShopComponent implements OnInit{

  public isShowCandlesList: boolean = true;

  constructor(
    public cartItemsService: CartItemsService,
    public candlesService: CandlesService
  ) {}

  ngOnInit(): void {
    this.cartItemsService.initialize();
    this.candlesService.initialize();
  }

  addCartItem(newItem: CartItem): void {
    this.isShowCandlesList = false;
    this.cartItemsService.addCartItem(newItem);
  }

  public showCandles(): void {
    this.isShowCandlesList = true;
  }

  public hideCandles(): void {
    this.isShowCandlesList = false;
  }

  public deleteCartItem(id: number): void {
    this.cartItemsService.delete(id);
  } 
  
  public updateCartItem(idCount: IdCount){
    this.cartItemsService.updateCount(idCount.id, idCount.count);
  } 
}
