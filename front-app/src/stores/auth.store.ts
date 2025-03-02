import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
interface IAuthState {
  isLogin: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
}

export const authStore = create<IAuthState>()(
  immer((set) => ({
    isLogin: false,
    accessToken: null,
    refreshToken: null,
    setTokens: (accessToken, refreshToken) =>
      set({ accessToken, refreshToken }),
    clearTokens: () => set({ accessToken: null, refreshToken: null }),
  }))
);
