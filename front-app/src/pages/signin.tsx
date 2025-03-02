import { useStore } from "@src/stores";

export default function signin() {
  const { modal } = useStore().config();

  const onClick = () => {
    modal.setModal({ isOpen: true, children: <div>test</div> });
  };

  return <div onClick={onClick}>signin</div>;
}
