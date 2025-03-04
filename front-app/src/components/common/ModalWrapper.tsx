import { css } from "@emotion/react";
import { useStore } from "@src/stores";

export const ModalWrapper = () => {
  const { modal } = useStore().config();

  return (
    <div
      className={`modal ${modal.isOpen ? "open" : ""}`}
      css={modalDynamicStyles(modal.isOpen)}
      onClick={() => modal.update({ isOpen: false })}
    >
      {modal.isOpen && (
        <>
          {typeof modal.content === "string" ? (
            <div className="default_modal" onClick={(e) => e.stopPropagation()}>
              {modal.content}
            </div>
          ) : (
            modal.content
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
