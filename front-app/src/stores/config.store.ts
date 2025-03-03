import { ReactNode } from "react";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

interface IConfigState {
  modal: {
    isOpen: boolean;
    children: ReactNode;
    setModal: (modal: Partial<Omit<IConfigState["modal"], "setModal">>) => void;
  };
  load: {
    isLoading: boolean;
    setLoading: (isLoading: boolean) => void;
  };
}

export const configStore = create<IConfigState>()(
  immer((set) => ({
    modal: {
      isOpen: false,
      children: null,
      setModal: ({ isOpen, children = null }) =>
        set((state) => {
          state.modal.isOpen = isOpen ?? state.modal.isOpen;
          state.modal.children = children;
        }),
    },
    load: {
      isLoading: false,
      setLoading: (isLoading: boolean) =>
        set((state) => {
          state.load.isLoading = isLoading;
        }),
    },
  }))
);
