import { Inject, Injectable } from "@angular/core";
import { CartItem } from "../interfaces/Candle";
import { ICartItemsApiService, ICartItemsApiServiceToken } from "../interfaces/ICartItemsApiService";

  
@Injectable({providedIn: 'root'})
export class CartItemsService{

    constructor(@Inject(ICartItemsApiServiceToken) public cartItemsService: ICartItemsApiService ) {
    } 
    
    private _cartItems: CartItem[] = [];
    private _summary = 0;
    public countryCurrency: Promise<void> = fetch("https://restcountries.com/v2/all").then(
        response => {
            if (!response.ok) { throw new Error(response.statusText) }
            return response.json()
            }).then(res => {
            for (let i=0; i < res.length; i+=1) {
                res[i] = {name: res[i].name, code: res[i].currencies ? res[i].currencies[0].symbol : ''}}});
      
    get cartItems(): CartItem[] {
        return this._cartItems;
    }
    get summary(): number {
        return this._summary;
    }
    
    public initialize(): void {
        this.cartItemsService.getAll().subscribe((cartItems: CartItem[]) => {
        this._cartItems = cartItems;
        this.updateSummary();
        })
    }

    public updateSummary(): void {
        this._summary = this._cartItems.reduce((sum, item) => item.price*item.count + sum, 0);
    }


    public addCartItem(newItem: CartItem): void {
        this.cartItemsService.add(newItem).subscribe(() => {
            this.initialize();
        })      
    }

    public delete(id: number): void {
        this.cartItemsService.delete(id).subscribe(() => {
            this.initialize();
        })    
    }
    public updateCount(id: number, count: number): void {
        this.cartItemsService.updateCount(id, count).subscribe(() => {
            this.initialize();
        })    
    }
  
       
}

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