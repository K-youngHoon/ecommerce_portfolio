import { create } from "zustand";

export const useMenuStore = create<MenuStoreType>((set) => ({
  currentMenu: "Home",
  setCurrentMenu: (newState: MenuStoreType) => {
    set(() => ({ currentMenu: newState }));
  },
}));

type MenuStoreType = {};
