import { NgModule } from '@angular/core';
import { ShopCartModule } from './shop-cart/shop-cart.module';
import { ShopFooterModule } from './shop-footer/shop-footer.module';
import { ShopItemModule } from './shop-item/shop-item.module';
import { ShopComponent } from './shop.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ShopComponent
    ],
    imports: [
        CommonModule,
        ShopFooterModule,
        ShopItemModule,
        ShopCartModule,
    ],
    exports: [
        ShopComponent,
    ]
})
export class ShopModule { }