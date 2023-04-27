import { NgModule } from '@angular/core';
import { ShopCartItemModule } from './shop-cart/shop-cart-item/shop-cart-item.module';
import { ShopButtonModule } from './shop-button/shop-button.module';
import { ShopCartModule } from './shop-cart/shop-cart.module';
import { ShopCounterWrapperModule } from './shop-counter-wrapper/shop-counter-wrapper.module';
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
    ],
    exports: [
        ShopComponent,
    ]
})
export class ShopModule { }