import { createStore } from "zustand/vanilla";
import { immer } from "zustand/middleware/immer";

interface IAuthState {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
}

export const useAuthStore = createStore<IAuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),
  clearTokens: () => set({ accessToken: null, refreshToken: null }),
}));

export const authStore = createStore<IAuthState>()(
  immer((set) => ({
    accessToken: null,
    refreshToken: null,
    setTokens: (accessToken, refreshToken) =>
      set({ accessToken, refreshToken }),
    clearTokens: () => set({ accessToken: null, refreshToken: null }),
  }))
);
