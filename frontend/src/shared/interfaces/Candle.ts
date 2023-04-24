export interface Candle {
    title: string;
    price: number;
    imgPath: string;
    isInStock?: boolean;    // в наличии
  }
  export interface CartItem extends Candle {
    count: number;
    id: number;
  }

  export interface IdCount {
    count: number;
    id: number;
  }