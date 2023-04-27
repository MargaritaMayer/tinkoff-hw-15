import { NgModule } from '@angular/core';
import { ShopCounterWrapperComponent } from './shop-counter-wrapper.component';

@NgModule({
    declarations: [
        ShopCounterWrapperComponent
    ],
    imports: [
        ShopCounterWrapperModule,   
    ],
    exports: [
        ShopCounterWrapperComponent,
    ]
 })
 export class ShopCounterWrapperModule { }