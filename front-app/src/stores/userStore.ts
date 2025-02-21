import { createStore } from "zustand/vanilla";
import { User } from "@src/features/user/model";
import { IUserStore } from "@src/features/user/type";
import { immer } from "zustand/middleware/immer";

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
