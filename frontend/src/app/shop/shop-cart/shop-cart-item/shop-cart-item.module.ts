import { NgModule } from '@angular/core';
import { ShopCartItemComponent } from './shop-cart-item.component';
import { CommonModule } from '@angular/common';
import { ShopCounterWrapperModule } from '../../shop-counter-wrapper/shop-counter-wrapper.module';

@NgModule({
    declarations: [
        ShopCartItemComponent
    ],
    imports: [
        CommonModule, 
        ShopCounterWrapperModule,  
    ],
    exports: [
        ShopCartItemComponent,
    ]
 })
export class ShopCartItemModule { }