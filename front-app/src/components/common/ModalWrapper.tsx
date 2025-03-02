import { css } from "@emotion/react";
import { useStore } from "@src/stores";

export const ModalWrapper = () => {
  const { modal } = useStore().config();

  return (
    <div
      className={`modal ${modal.isOpen ? "open" : ""}`}
      css={modalDynamicStyles(modal.isOpen)}
      onClick={() => modal.setModal({ isOpen: false })}
    >
      {modal.isOpen && (
        <>
          {modal.children === null ? (
            <div className="default_modal" onClick={(e) => e.stopPropagation()}>
              {modal.children}
            </div>
          ) : (
            modal.children
          )}
        </>
      )}
    </div>
  );
};

const modalDynamicStyles = (isOpen: boolean) => css`
  display: ${isOpen ? "flex" : "none"};
  animation: ${isOpen ? "modal-bg-show 0.3s ease-out" : "none"};
`;
