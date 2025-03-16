import { ModalWrapper } from "@src/components/modal";
import { Loading } from "@src/components/loading";
import { JSX } from "react";

const WrapperProvider = (props: React.PropsWithChildren<any>): JSX.Element => {
  return (
    <div>
      {props.children}
      <ModalWrapper />
      <Loading />
    </div>
  );
};

export { WrapperProvider };
