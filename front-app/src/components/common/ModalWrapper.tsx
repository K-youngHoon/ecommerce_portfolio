import { useStore } from "@src/stores";

export const ModalWrapper = () => {
  const { modal } = useStore().config.getState();

  return (
    <div
      className={`modal ${modal.isOpen && "open"}`}
      onClick={() => modal.setModal({ isOpen: false })}
    >
      {modal.isOpen ? (
        <>
          {typeof modal.children === "string" ? (
            <div
              className={"default_modal"}
              onClick={(e) => e.stopPropagation()}
            >
              {modal.children}
            </div>
          ) : (
            modal.children
          )}
        </>
      ) : null}
    </div>
  );
};
