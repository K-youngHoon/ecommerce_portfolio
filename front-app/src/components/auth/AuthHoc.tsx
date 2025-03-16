import { useStore } from "@src/stores";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const authHoc = (Component: React.ComponentType) => (props: any) => {
  const router = useRouter();
  const { isLogin } = useStore().auth();

  // useStore().auth.setState((state) => {
  //   state.isLogin = true;
  // });

  useEffect(() => {
    if (!isLogin) {
      router.replace("/user/login");
    }
  }, [isLogin, router]);

  return isLogin ? <Component {...props} /> : null;
};
