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

export interface SidebarType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSidebarClose: () => void;
}

export interface CartItemsType extends ProductType {
  amount: number;
}

export interface CartType {
  cart: CartItemsType[];
  handleAddToCart: (product: ProductType) => void;
  handleRemoveFromCart: (id: number) => void;
  handleClearAll: () => void;
  handleIncreaseAmount: (id: number) => void;
  handleDecreaseAmount: (id: number) => void;
  totalAmount: number;
  totalPrice: number;
}
