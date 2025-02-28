import { createContext, useContext } from "react";
import { userStore } from "./user.store";
import { authStore } from "./auth.store";

export const StoreContext = createContext<typeof stores | null>(null);

export const stores = {
  user: userStore,
  auth: authStore,
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
};
