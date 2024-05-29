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

export interface CartItem extends IProduct {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}
