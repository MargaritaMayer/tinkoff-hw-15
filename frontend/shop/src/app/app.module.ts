import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ShopCartComponent } from './shop/shop-cart/shop-cart.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ShopCartComponent,
    ShopItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
