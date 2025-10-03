export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  customerName: string;
  phone: string;
  address: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  message?: string;
  error?: string;
}
