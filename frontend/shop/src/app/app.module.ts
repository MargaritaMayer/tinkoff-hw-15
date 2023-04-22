import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ShopCartComponent } from './shop/shop-cart/shop-cart.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { ShopCartItemComponent } from './shop/shop-cart/shop-cart-item/shop-cart-item.component';
import { ShopCounterWrapperComponent } from './shop/shop-counter-wrapper/shop-counter-wrapper.component';
import { ShopButtonComponent } from './shop/shop-button/shop-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ShopCartComponent,
    ShopItemComponent,
    ShopCartItemComponent,
    ShopCounterWrapperComponent,
    ShopButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
