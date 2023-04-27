import { NgModule } from '@angular/core';
import { ShopFooterComponent } from './shop-footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ShopFooterComponent
    ],
    imports: [
        CommonModule,   
    ],
    exports: [
        ShopFooterComponent,
    ]
 })
export class ShopFooterModule { }