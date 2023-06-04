import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";

import { CartContext, SidebarContext } from "../../context";

type HeaderProps = {
  //
};

export const Header = (props: HeaderProps) => {
  /** Property */
  const { setIsSidebarOpen } = useContext(SidebarContext);
  const { totalAmount } = useContext(CartContext);

  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    window.scrollY > 90 ? setIsActive(true) : setIsActive(false);
  };

  /** Function */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /** Render */
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed z-10 w-full transition-all lg:px-14 lg:py-4`}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link to={"/"}>
          <div className="">
            <img
              src={Logo}
              alt="logo"
              className="w-10 rounded-full border-2 border-gray-600"
            />
          </div>
        </Link>
        <button
          className={"relative flex max-w-[50px]"}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <BsBag className="text-2xl" />
          <div className="-bootom-2 absolute -right-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 text-[12px] text-white">
            {totalAmount}
          </div>
        </button>
      </div>
    </header>
  );
};
