import { NgModule } from '@angular/core';
import { ShopItemComponent } from './shop-item.component';
import { CommonModule } from '@angular/common';
import { ShopButtonModule } from '../shop-button/shop-button.module';
import { ShopCounterWrapperModule } from '../shop-counter-wrapper/shop-counter-wrapper.module';

@NgModule({
    declarations: [
        ShopItemComponent
    ],
    imports: [
        CommonModule,   
        ShopButtonModule,
        ShopCounterWrapperModule,
    ],
    exports: [
        ShopItemComponent,
      ]
 })

export class ShopItemModule { }