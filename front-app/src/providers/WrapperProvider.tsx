import { ModalWrapper } from "@src/components/common";
import { JSX } from "react";

const WrapperProvider = (props: React.PropsWithChildren<any>): JSX.Element => {
  return (
    <div>
      <p>App_Wrapper</p>
      {props.children}
      <ModalWrapper />
    </div>
  );
};

export { WrapperProvider };
