import { useStore } from "@src/stores";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const authHoc = (Component: React.ComponentType) => (props: any) => {
  const router = useRouter();
  const { isLogin } = useStore().auth.getState();

  // useStore().auth.setState((state) => {
  //   state.isLogin = true;
  // });

  useEffect(() => {
    if (!isLogin) {
      router.replace("/signin");
    }
  }, [isLogin, router]);

  return isLogin ? <Component {...props} /> : null;
};
