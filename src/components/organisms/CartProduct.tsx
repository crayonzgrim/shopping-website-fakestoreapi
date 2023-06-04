import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";

import { CartItemsType } from "../../types";
import { CartContext } from "../../context";

type CartProductProps = {
  product: CartItemsType;
};

export const CartProduct = (props: CartProductProps) => {
  /** Property */
  const {
    product: { id, title, image, price, amount },
  } = props;

  const { handleIncreaseAmount, handleDecreaseAmount, handleRemoveFromCart } =
    useContext(CartContext);

  /** Function */

  /** Render */
  return (
    <div className="flex w-full gap-x-4 border-b border-gray-200 py-2 font-light text-gray-500 lg:px-3">
      <div className="flex min-h-[150px] w-full items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>

        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            <Link
              to={`/product/${id}`}
              className={
                "max-w-[240px] text-sm font-medium uppercase text-primary hover:underline"
              }
            >
              {title}
            </Link>

            <button onClick={() => handleRemoveFromCart(id)}>
              <IoMdClose className="text-gray-500 transition hover:text-red-500" />
            </button>
          </div>

          <div className="flex h-[36px] gap-x-2 text-sm">
            <div className="flex h-full max-w-[100px] flex-1 items-center justify-between border px-4 font-medium text-primary">
              <button
                onClick={() => handleDecreaseAmount(id)}
                className="flex h-full flex-1 items-center justify-center"
              >
                <IoMdRemove />
              </button>
              <div className="flex h-full items-center justify-center px-2">
                {amount}
              </div>
              <button
                onClick={() => handleIncreaseAmount(id)}
                className={"flex h-full flex-1 items-center justify-center"}
              >
                <IoMdAdd />
              </button>
            </div>
            <div className={"flex flex-1 items-center justify-around"}>
              $ {price}
            </div>
            <div
              className={
                "mt-1 flex flex-1 items-center justify-end font-medium text-primary"
              }
            >
              {`$ ${Number(
                parseFloat((price * amount).toString()).toFixed(2)
              )}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
