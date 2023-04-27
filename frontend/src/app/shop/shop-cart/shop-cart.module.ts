import { NgModule } from '@angular/core';
import { ShopCartComponent } from './shop-cart.component';
import { CommonModule } from '@angular/common';
import { ShopButtonModule } from '../shop-button/shop-button.module';
import { ShopCartItemModule } from './shop-cart-item/shop-cart-item.module';

@NgModule({
    declarations: [
        ShopCartComponent
    ],
    imports: [
        CommonModule, 
        ShopButtonModule,  
        ShopCartItemModule,
    ],
    exports: [
        ShopCartComponent,
    ]
 })
 export class ShopCartModule { }