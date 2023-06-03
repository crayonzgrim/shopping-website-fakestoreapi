import React, { createContext, useState } from "react";
import { SidebarType } from "../types";

export const SidebarContext = createContext<SidebarType>({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
  handleSidebarClose: () => {},
});

type SidebarProviderProps = {
  children: React.ReactNode;
};

export const SidebarProvider = (props: SidebarProviderProps) => {
  /** Property */
  const { children } = props;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /** Function */
  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  /** Render */
  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, handleSidebarClose }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
