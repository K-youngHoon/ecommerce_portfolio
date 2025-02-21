import { StoreContext, stores } from "@src/stores";
// import { createContext, useContext } from "react";
// import { useStore as useZustandStore } from "zustand";

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
};
