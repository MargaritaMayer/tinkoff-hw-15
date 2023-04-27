import { NgModule } from '@angular/core';
import { ShopItemComponent } from './shop-item.component';

@NgModule({
    declarations: [
        ShopItemComponent
    ],
    imports: [
        ShopItemModule,   
    ],
    exports: [
        ShopItemComponent,
      ]
 })

export class ShopItemModule { }