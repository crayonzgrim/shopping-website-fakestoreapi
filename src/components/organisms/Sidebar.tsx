import React, { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";

import { SidebarContext } from "../../context";

export const Sidebar = () => {
  const { isSidebarOpen, handleSidebarClose } = useContext(SidebarContext);

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
    </div>
  );
};
