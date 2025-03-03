import { useStore } from "@src/stores";
import React from "react";

const Loading = () => {
  const { load } = useStore().config();
  return (
    <div className={`loading ${load.isLoading && `open`}`}>
      <p>☺</p>
      <p>Page Loading...</p>
    </div>
  );
};

export { Loading };
