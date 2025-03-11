import { User } from "@src/features/user/model";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface IUserStore {
  myInfo: User | null;
  setMyInfo: (user: User) => void;
}

export const userStore = create<IUserStore>()(
  immer((set) => ({
    myInfo: null,
    setMyInfo: (user) =>
      set((state) => {
        // if (state.currentUser) state.currentUser.id = user.id;
        state.myInfo = user;
      }),
  }))
);
