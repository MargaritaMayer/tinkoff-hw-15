import { NgModule } from '@angular/core';
import { ShopButtonComponent } from './shop-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ShopButtonComponent
    ],


    imports: [
        CommonModule,   
    ],
    exports: [
        ShopButtonComponent,
    ]
 })
export class ShopButtonModule { }