import { ReactNode } from "react";
import { createStore } from "zustand/vanilla";
import { immer } from "zustand/middleware/immer";

interface IConfigState {
  modal: {
    isOpen: boolean;
    children: ReactNode;
    setModal: (modal: Partial<Omit<IConfigState["modal"], "setModal">>) => void;
  };
}

export const configStore = createStore<IConfigState>()(
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
  }))
);
