import { create } from "zustand";
import { User } from "./model";

interface IUserStore {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user: User) => set({ currentUser: user }),
}));
