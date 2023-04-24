import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICandlesApiService } from "../interfaces/ICandlesApiService";
import { Candle } from "../interfaces/Candle";

const host = 'http://localhost:3000/candles'

@Injectable({providedIn: 'root'})
export class CandlesApiService implements ICandlesApiService{
    constructor(private httpClient: HttpClient) {
    }
    getAll(): Observable<Candle[]> {
        return this.httpClient.get<Candle[]>(host);
    }
    // update(candle: Candle): Observable<void> {
    //     throw new Error("Method not implemented.");
    // }


}