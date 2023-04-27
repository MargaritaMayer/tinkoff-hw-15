import { NgModule } from '@angular/core';
import { ShopFooterComponent } from './shop-footer.component';

@NgModule({
    declarations: [
        ShopFooterComponent
    ],
    imports: [
        ShopFooterModule,   
    ],
    exports: [
        ShopFooterComponent,
    ]
 })
export class ShopFooterModule { }