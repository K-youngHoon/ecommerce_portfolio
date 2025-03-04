import { ReactNode } from "react";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

interface IConfigState {
  modal: {
    isOpen: boolean;
    content: ReactNode | string;
    update: (modal: Partial<Omit<IConfigState["modal"], "update">>) => void;
  };
  loading: {
    isActive: boolean;
    update: (isActive: boolean) => void;
  };
}

export const configStore = create<IConfigState>()(
  immer((set) => ({
    modal: {
      isOpen: false,
      content: null,
      update: ({ isOpen, content = null }) =>
        set(({ modal }) => {
          modal.isOpen = isOpen ?? modal.isOpen;
          modal.content = content;
        }),
    },
    loading: {
      isActive: false,
      update: (isActive: boolean) =>
        set(({ loading }) => {
          loading.isActive = isActive;
        }),
    },
  }))
);
