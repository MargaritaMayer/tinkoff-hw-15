import { Inject, Injectable } from "@angular/core";
import { Candle } from "../interfaces/Candle";
import { CandlesService } from "./candles.service";
import { CartItem } from "../interfaces/CartItem";

  
@Injectable({providedIn: 'root'})
export class CartService{
    constructor(public candlesService: CandlesService) {}

    private _cartItems: CartItem[] = [];
    private _summary = 0;

    get cartItems(): CartItem[] {
        return this._cartItems;
    }

    get summary(): number {
        return this._summary;
    }
    
    public updateSummary(): void {
        this._summary = this._cartItems.reduce((sum, cartItem) => 
            (this.candlesService.getCandleById(cartItem.candleId)?.price ?? 0)
            *cartItem.count + sum, 0);
    }

    public addCartItem(item: CartItem): void {
        const cartItem: CartItem | undefined = this._cartItems.find(i => i.candleId === item.candleId)
        if (cartItem){ cartItem.count += item.count; }
        else { this._cartItems.push(item); }
        this.updateSummary();      
    }

    public deleteItem(candleId: number): void {
        this._cartItems = this._cartItems.filter(cartItem => cartItem.candleId !== candleId);
        this.updateSummary(); 
    }

    public getCartItemById(candleId: number) {
        return this._cartItems.find(i => i.candleId === candleId);
    }

    public updateCount(cartItem: CartItem): void {

        this.cartItems.forEach(item => {
            if (item.candleId === cartItem.candleId){ 
              item.count = cartItem.count; 
        }})
        this.updateSummary();
    }
}







// public delete(id: number): void {
// this.cartItemsService.delete(id).subscribe(() => {
//     this.initialize();
// })    
// }
// public updateCount(id: number, count: number): void {
// this.cartItemsService.updateCount(id, count).subscribe(() => {
//     this.initialize();
// })    
// }


// }

// public getCartItemById (id: number){
//     return this.cartItems.find(x => x.id === id);
//   }


// public removeItemCart(id: number): void {
//     this.cartItems = this.cartItems.filter(item => item.id !== id); 
//     this.updateSum();
//   } 

// public changeCount(idCount: IdCount){
//     const cartItem = this.getCartItemById(idCount.id); 
//     if (cartItem) {
//       cartItem.count = idCount.count;
//       this.updateSum();
//     }
//   }  


// public addCandle(newItem: CartItem): void {

//     const item = this.cartItems.find(item => item.title===newItem.title);
//     if (item){
//       item.count +=1;
//     } else {
//       newItem.id = this.cartItems.length+1;
//       this.cartItems.push(newItem); 
//     } 
//   }






// public countryCurrency: Promise<void> = fetch("https://restcountries.com/v2/all").then(
//     response => {
//         if (!response.ok) { throw new Error(response.statusText) }
//         return response.json()
//         }).then(res => {
//         for (let i=0; i < res.length; i+=1) {
//             res[i] = {name: res[i].name, code: res[i].currencies ? res[i].currencies[0].symbol : ''}}});

//     constructor(@Inject(ICandlesApiServiceToken) public candlesService: ICandlesApiService ) {
//     } 