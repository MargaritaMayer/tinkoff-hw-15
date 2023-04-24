import { Observable } from "rxjs";
import { InjectionToken } from "@angular/core";
import {CartItem } from "./Candle";

export const ICartItemsApiServiceToken = new InjectionToken('ICartItemsApiServiceToken');
export interface ICartItemsApiService{
    add(candle: CartItem): Observable<void>;
    getAll(): Observable<CartItem[]>;
    delete(id: number): Observable<void>;
    updateCount(id: number, count: number): Observable<void>;
}