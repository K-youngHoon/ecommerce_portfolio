import { createStore } from "zustand/vanilla";
import { User } from "@src/features/user/model";
import { immer } from "zustand/middleware/immer";

export interface IUserStore {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}

export const useUserStore = createStore<IUserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user: User) => set({ currentUser: user }),
}));

export const userStore = createStore<IUserStore>()(
  immer((set) => ({
    currentUser: null,
    setCurrentUser: (user) =>
      set((state) => {
        // if (state.currentUser) state.currentUser.id = user.id;
        state.currentUser = user;
      }),
  }))
);
