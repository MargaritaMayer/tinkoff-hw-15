import { NgModule } from '@angular/core';
import { ShopCounterWrapperComponent } from './shop-counter-wrapper.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ShopCounterWrapperComponent
    ],
    imports: [
        CommonModule,   
    ],
    exports: [
        ShopCounterWrapperComponent,
    ]
 })
 export class ShopCounterWrapperModule { }