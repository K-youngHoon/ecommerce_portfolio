import { useStore } from "@src/stores";
import React from "react";

const Loading = () => {
  const { loading } = useStore().config();
  return (
    <div className={`loading ${loading.isActive && `open`}`}>
      <p>☺</p>
      <p>Page Loading...</p>
    </div>
  );
};

export { Loading };
