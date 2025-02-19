import { create } from "zustand";
import { User } from "@src/domain/user.model";

interface UserStore {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user: User) => set({ currentUser: user }),
}));
