export interface IProduct {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
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

export interface RootState {
  productsFilter: {
    products: IProduct[];
    filteredProducts: IProduct[];
    search: string;
    category: string;
  };
}
