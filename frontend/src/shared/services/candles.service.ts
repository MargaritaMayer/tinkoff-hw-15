import { Inject, Injectable } from "@angular/core";
import { Candle } from "../interfaces/Candle";
import { ICandlesApiService, ICandlesApiServiceToken } from "../interfaces/ICandlesApiService";

  
@Injectable({providedIn: 'root'})
export class CandlesService{

    private _candles: Candle[] = [];

    constructor(@Inject(ICandlesApiServiceToken) public candlesService: ICandlesApiService ) {
    }   
    get candles(): Candle[] {
        return this._candles;
    }

    initialize(): void {
        this.candlesService.getAll().subscribe((candles: Candle[]) => {
        this._candles = candles;
        })
    }
}

  