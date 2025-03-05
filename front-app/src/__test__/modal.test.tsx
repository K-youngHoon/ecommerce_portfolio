import { configStore } from "@src/stores/config.store";
import { act } from "react";
import { ReactNode } from "react";

describe("모달", () => {
  beforeEach(() => {
    configStore.setState((state) => ({
      modal: {
        ...state.modal,
        isOpen: false,
        content: null,
      },
    }));
  });

  test("스트링 모달 테스트", () => {
    const modal = configStore.getState().modal;

    expect(modal.isOpen).toBe(false);
    expect(modal.content).toBeNull();

    act(() => {
      modal.update({ isOpen: true, content: "test string" });
    });

    expect(configStore.getState().modal.isOpen).toBe(true);
    expect(configStore.getState().modal.content).toBe("test string");
  });

  test("태그 모달 테스트", () => {
    const modal = configStore.getState().modal;
    const content: ReactNode = <div>Test JSX Content</div>;

    expect(modal.isOpen).toBe(false);
    expect(modal.content).toBeNull();

    act(() => {
      modal.update({ isOpen: true, content });
    });

    expect(configStore.getState().modal.isOpen).toBe(true);
    expect(configStore.getState().modal.content).toEqual(content);
  });
});
