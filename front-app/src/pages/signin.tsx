import { useStore } from "@src/stores";

export default function signin() {
  const { modal, load } = useStore().config();

  const onClick = () => {
    // modal.setModal({ isOpen: true, children: <div>test</div> });
    load.setLoading(true);
  };

  return <div onClick={onClick}>signin</div>;
}
