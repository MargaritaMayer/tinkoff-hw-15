import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CandlesApiService } from 'src/app/shared/services/candles-api.service';
import { ICandlesApiServiceToken } from 'src/app/shared/interfaces/i-candles-api-service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TuiDataListModule, TuiRootModule} from '@taiga-ui/core';
import { ShopModule } from './shop/shop.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TuiRootModule, 
    FormsModule,
    TuiDataListModule,
    ShopModule,   
  ],
  providers: [
    {provide: ICandlesApiServiceToken, useClass: CandlesApiService}, 
  ],
  bootstrap: [AppComponent],
  

})
export class AppModule { }