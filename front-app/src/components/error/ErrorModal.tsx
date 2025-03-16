import { useStore } from "@src/stores";

interface IProps {
  msg?: string;
}

export const ErrorModal = ({
  msg = "알 수 없는 에러가 발생하였습니다. 잠시후 다시 시도해주세요.",
}: IProps) => {
  const { modal } = useStore().config();

  const onClose = () => {
    modal.update({ isOpen: false, content: null });
  };

  return (
    <div>
      <p>{msg}</p>
      <button onClick={onClose}>확인</button>
    </div>
  );
};
