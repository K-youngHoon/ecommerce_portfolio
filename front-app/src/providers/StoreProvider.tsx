import { StoreContext, stores } from "@src/stores";
import { ReactNode } from "react";
// import { createContext, useContext } from "react";
// import { useStore as useZustandStore } from "zustand";

type Props = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: Props) => {
  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
};
