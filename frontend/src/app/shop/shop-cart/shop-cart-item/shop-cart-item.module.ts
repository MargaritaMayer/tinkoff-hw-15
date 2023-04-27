import { NgModule } from '@angular/core';
import { ShopCartItemComponent } from './shop-cart-item.component';

@NgModule({
    declarations: [
        ShopCartItemComponent
    ],
    imports: [
        ShopCartItemModule,   
    ],
    exports: [
        ShopCartItemComponent,
    ]
 })
export class ShopCartItemModule { }