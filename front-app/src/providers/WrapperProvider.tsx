import { ModalWrapper, Loading } from "@src/components/common";
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
