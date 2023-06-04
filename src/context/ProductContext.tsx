import React, { createContext, useEffect, useState } from "react";
import { ProductContextType } from "../types";
import { fakeApi } from "../api";

export const ProductContext = createContext<ProductContextType>({
  products: [],
});

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductProvider = (props: ProductProviderProps) => {
  /** Property */
  const { children } = props;

  const [products, setProducts] = useState([]);

  /** Function */
  const fetchProdutcs = async () => {
    const response = await fetch(fakeApi);
    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    fetchProdutcs();
  }, []);

  /** Render */
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
