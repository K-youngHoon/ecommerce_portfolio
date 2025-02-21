import { createContext, useContext } from "react";
import { userStore } from "./userStore";

export const StoreContext = createContext<typeof stores | null>(null);

export const stores = {
  user: userStore,
  //   settings: settingsStore,
  //   products: productStore,
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
};
