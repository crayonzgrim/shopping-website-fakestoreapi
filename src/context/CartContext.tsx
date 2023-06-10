import React, { createContext, useCallback, useEffect, useState } from "react";
import { CartItemsType, CartType, ProductType } from "../types";

export const CartContext = createContext<CartType>({
  cart: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleClearAll: () => {},
  handleIncreaseAmount: () => {},
  handleDecreaseAmount: () => {},
  totalAmount: 0,
  totalPrice: 0,
});

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = (props: CartProviderProps) => {
  /** Property */
  const { children } = props;

  const [cart, setCart] = useState<CartItemsType[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  /** Function */
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // Check-1 : 카트에 추가하는 로직입니다.
  // 추가한 아이템의 id와 카트에 담긴 아이템의 id를 비교해서 같은 것이 있다면 amount를 하나씩 늘리게 됩니다.
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  const handleAddToCart = useCallback(
    (product: ProductType) => {
      const newProduct = { ...product, amount: 1 };

      const cartItem = cart.find((item) => {
        return item?.id === product?.id;
      });

      if (cartItem) {
        const newCart = [...cart].map((item) => {
          if (item.id === product.id) {
            return { ...item, amount: cartItem.amount + 1 };
          } else {
            return item;
          }
        });
        setCart(newCart);
      } else {
        setCart([...cart, newProduct]);
      }
    },
    [cart]
  );

  const handleRemoveFromCart = useCallback(
    (id: number) => {
      const newCart = cart.filter((item) => {
        return item.id !== id;
      });

      setCart(newCart);
    },
    [cart]
  );

  const handleClearAll = useCallback(() => {
    setCart([]);
  }, []);

  const handleIncreaseAmount = useCallback(
    (id: number) => {
      const product = cart.find((item) => item.id === id);

      if (product) {
        handleAddToCart(product);
      }
    },
    [cart, handleAddToCart]
  );

  const handleDecreaseAmount = useCallback(
    (id: number) => {
      const product = cart.find((item) => item.id === id);

      if (product) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: product.amount - 1 };
          } else {
            return item;
          }
        });

        setCart(newCart);

        if (product?.amount < 2) {
          handleRemoveFromCart(id);
        }
      }
    },
    [cart, handleRemoveFromCart]
  );

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // Check-2 : 카트에 넣은 상품의 전체 갯수와 전체 가격을 카운트합니다.
  // - amount
  //    - 상품의 amount를 초기값에 더해가는 방식으로 계산합니다.
  // - total
  //    - 상품의 가격과 갯수를 곱한 뒤 초기값에 계속 더해가는 방식으로 계산합니다.
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  useEffect(() => {
    const amount = cart.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
    setTotalAmount(amount);

    const total = cart.reduce((acc, cur) => {
      return acc + cur.price * cur.amount;
    }, 0);

    setTotalPrice(total);
  }, [cart]);

  /** Render */
  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearAll,
        handleIncreaseAmount,
        handleDecreaseAmount,
        totalAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
