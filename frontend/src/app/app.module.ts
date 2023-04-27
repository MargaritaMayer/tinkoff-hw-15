import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ShopCartComponent } from './shop/shop-cart/shop-cart.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { ShopCartItemComponent } from './shop/shop-cart/shop-cart-item/shop-cart-item.component';
import { ShopCounterWrapperComponent } from './shop/shop-counter-wrapper/shop-counter-wrapper.component';
import { ShopButtonComponent } from './shop/shop-button/shop-button.component';
import { ShopFooterComponent } from './shop/shop-footer/shop-footer.component';
import { CandlesApiService } from 'src/shared/services/candles-api.service';
import { ICandlesApiServiceToken } from 'src/shared/interfaces/i-candles-api-service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDataListComponent, TuiDataListModule, TuiRootModule} from '@taiga-ui/core';
import { ShopModule } from './shop/shop.module';
import { ShopCartItemModule } from './shop/shop-cart/shop-cart-item/shop-cart-item.module';
import { ShopButtonModule } from './shop/shop-button/shop-button.module';
import { ShopCartModule } from './shop/shop-cart/shop-cart.module';
import { ShopCounterWrapperModule } from './shop/shop-counter-wrapper/shop-counter-wrapper.module';
import { ShopFooterModule } from './shop/shop-footer/shop-footer.module';
import { ShopItemModule } from './shop/shop-item/shop-item.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // ShopComponent,
    // ShopCartComponent,
    // ShopItemComponent,
    // ShopCartItemComponent,
    // ShopCounterWrapperComponent,
    // ShopButtonComponent,
    // ShopFooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    // TuiRootModule, 
    FormsModule,
    
    ShopModule,
    ShopCartItemModule,
    ShopButtonModule,
    ShopCartModule, 
    ShopCounterWrapperModule,
    ShopFooterModule,
    ShopItemModule,   
    TuiDataListModule
  ],
  providers: [
    {provide: ICandlesApiServiceToken, useClass: CandlesApiService}, 
  ],
  bootstrap: [AppComponent],
  

})
export class AppModule { }