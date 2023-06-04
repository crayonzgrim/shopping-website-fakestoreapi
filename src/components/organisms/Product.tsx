import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { LuMaximize2 } from "react-icons/lu";
import { ProductType } from "../../types";
import { CartContext } from "../../context";

type ProductProps = {
  product: ProductType;
};

export const Product = (props: ProductProps) => {
  /** Property */
  const {
    product: { id, image, category, title, price },
  } = props;

  const { handleAddToCart } = useContext(CartContext);

  /** Function */

  /** Render */
  return (
    <div>
      <div className="group relative mb-4 h-[300px] overflow-hidden border border-gray-200 transition">
        <div className="flex h-full w-full items-center justify-center">
          <div className="mx-auto flex w-[200px] items-center justify-center">
            <img
              src={image}
              alt={title}
              className="max-h-[160px] transition duration-300 group-hover:scale-110"
            />
          </div>

          <div className="absolute right-0 top-0 flex flex-col items-center justify-center gap-y-2 p-2 opacity-0 transition-all duration-300 group-hover:right-1 group-hover:opacity-100">
            <button onClick={() => handleAddToCart(props.product)}>
              <div className="flex h-8 w-8 items-center justify-center bg-red-500 text-white">
                <AiOutlineShoppingCart className="text-2xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="flex h-8 w-8 items-center justify-center bg-white text-primary drop-shadow-xl"
            >
              <LuMaximize2 className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-1 text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <p className="mb-1 font-semibold">{title}</p>
        </Link>
        <p className="font-semibold">$ {price}</p>
      </div>
    </div>
  );
};
