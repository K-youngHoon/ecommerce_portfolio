import { User } from "@src/features/user/model";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface IUserStore {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}

export const userStore = create<IUserStore>()(
  immer((set) => ({
    currentUser: null,
    setCurrentUser: (user) =>
      set((state) => {
        // if (state.currentUser) state.currentUser.id = user.id;
        state.currentUser = user;
      }),
  }))
);
