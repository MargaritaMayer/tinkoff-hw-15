import { Inject, Injectable } from "@angular/core";
import { Candle } from "../interfaces/Candle";
import { ICandlesApiService, ICandlesApiServiceToken } from "../interfaces/ICandlesApiService";

  
@Injectable({providedIn: 'root'})
export class CandlesService{
    constructor(@Inject(ICandlesApiServiceToken) public candlesService: ICandlesApiService ) {}

    private _candles: Candle[] = [];
      
    public get candles(): Candle[] {
        return this._candles;
    }

    public initialize(): void {
        this.candlesService.getAll().subscribe((candles: Candle[]) => {
        this._candles = candles;
        })
    }

    public getCandleById(id: number) {
        return this._candles.find(c => c.id === id);
    }
}