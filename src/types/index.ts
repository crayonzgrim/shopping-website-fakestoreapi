export interface ProductType {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductContextType {
  products: ProductType[];
}