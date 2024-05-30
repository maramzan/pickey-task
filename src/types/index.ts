export interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}
export interface IProductsState {
  products: IProduct[];
  loading?: boolean;
  error?: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICartState {
  cartItems: ICartItem[];
  totalItems: number;
  totalPrice: number;
}
