import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";

import { SidebarContext } from "../../context";

type HeaderProps = {
  //
};

export const Header = (props: HeaderProps) => {
  /** Property */
  const { setIsSidebarOpen } = useContext(SidebarContext);

  /** Function */

  /** Render */
  return (
    <div className="bg-orange-400">
      <div>Header</div>
      <button
        className={"cursor-pointer"}
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        <BsBag className="text-2xl" />
      </button>
    </div>
  );
};
