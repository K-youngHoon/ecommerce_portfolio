import { useStore } from "@src/stores";

export default function signin() {
  const { modal, loading } = useStore().config();

  const onClick = () => {
    modal.update({ isOpen: true, content: "test" });
    // loading.update(true);
  };

  return <div onClick={onClick}>signin</div>;
}
