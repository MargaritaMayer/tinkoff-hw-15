import { Observable } from "rxjs";
import { InjectionToken } from "@angular/core";
import { Candle } from "./Candle";

export const ICandlesApiServiceToken = new InjectionToken('ICandlesApiServiceToken');
export interface ICandlesApiService{
    getAll(): Observable<Candle[]>;
}