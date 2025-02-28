import { createStore } from "zustand/vanilla";
import { immer } from "zustand/middleware/immer";

interface IAuthState {
  isLogin: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
}

export const authStore = createStore<IAuthState>()(
  immer((set) => ({
    isLogin: false,
    accessToken: null,
    refreshToken: null,
    setTokens: (accessToken, refreshToken) =>
      set({ accessToken, refreshToken }),
    clearTokens: () => set({ accessToken: null, refreshToken: null }),
  }))
);
