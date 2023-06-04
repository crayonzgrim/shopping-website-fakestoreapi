import React, { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import { CartContext, SidebarContext } from "../../context";
import { CartProduct } from "./CartProduct";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  /** Property */
  const { isSidebarOpen, handleSidebarClose } = useContext(SidebarContext);
  const { cart, handleClearAll, totalPrice } = useContext(CartContext);

  /** Function */

  /** Render */
  return (
    <div
      className={`${
        isSidebarOpen ? "right-0" : "-right-full"
      } fixed top-0 z-10 h-full w-full bg-white px-4 shadow-2xl transition-all duration-300 md:w-[35vw] lg:px-[35px] xl:max-w-[30vw]`}
    >
      <div className="flex items-center justify-between border-b py-6">
        <div className="text-sm font-semibold uppercase">Shopping Bag {0}</div>
        <button
          onClick={handleSidebarClose}
          className="flex h-8 w-8 items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </button>
      </div>
      <div className="flex h-[480px] flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b lg:h-[470px]">
        {cart.map((item) => (
          <CartProduct key={item.id} product={item} />
        ))}{" "}
      </div>
      <div className="mt-4 flex flex-col gap-y-3 py-4">
        <div className="flex w-full items-center justify-between">
          <div className="ml-4 font-semibold uppercase">
            <span>Total : </span> $ {parseFloat(totalPrice.toFixed(2))}
          </div>
          <button
            onClick={handleClearAll}
            className="flex h-12 w-12 cursor-pointer items-center justify-center bg-red-500 py-4 text-xl text-white"
          >
            <FiTrash2 />
          </button>
        </div>
        <Link
          to={"/"}
          className="flex w-full items-center justify-center bg-gray-200 p-4 font-medium text-primary"
        >
          View cart
        </Link>
        <Link
          to={"/"}
          className="flex w-full items-center justify-center bg-primary p-4 font-medium text-white"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};
