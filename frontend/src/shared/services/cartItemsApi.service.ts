import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICartItemsApiService } from "../interfaces/ICartItemsApiService";
import { CartItem } from "../interfaces/Candle";

const host = 'http://localhost:3000/cartItems';

@Injectable({providedIn: 'root'})
export class CartItemsApiService implements ICartItemsApiService{
    constructor(private httpClient: HttpClient) {
    }

    add(cartItem: CartItem): Observable<void> {
        return this.httpClient.post<void>(host, cartItem);
    }
    getAll(): Observable<CartItem[]> {
        return this.httpClient.get<CartItem[]>(host);
    }
    delete(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${host}/${id}`);
    }   
    updateCount(id: number, count: number): Observable<void> {
        return this.httpClient.post<void>(host, {id, count});
    }

}

