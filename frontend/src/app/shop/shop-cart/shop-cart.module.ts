import { NgModule } from '@angular/core';
import { ShopCartComponent } from './shop-cart.component';

@NgModule({
    declarations: [
        ShopCartComponent
    ],
    imports: [
        ShopCartModule,   
    ],
    exports: [
        ShopCartComponent,
    ]
 })
 export class ShopCartModule { }