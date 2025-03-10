import styles from "./login.module.scss";
import { useStore } from "@src/stores";
import { LoginInput } from "@src/components/features";
import { FormProvider, useForm } from "react-hook-form";
import { LoginUser, loginUserSchema, useLoginUser } from "@src/features/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { parseZodErrors } from "@src/utils";
function LoginPage() {
  const { isRemember, toggleRemember } = useStore().auth();
  const mutation = useLoginUser();

  const methods = useForm<LoginUser>();
  // const methods = useForm<LoginUser>({
  //   resolver: zodResolver(loginUserSchema),
  // });

  // const { loading } = useStore().config();

  const onSubmit = (data: LoginUser) => {
    console.log("로그인 시도", isRemember);

    mutation.mutate(data, {
      onError: (error) => {
        const errorMessages = parseZodErrors(error);

        Object.entries(errorMessages).forEach(([key, message]) =>
          methods.setError(key as keyof LoginUser, { type: "manual", message })
        );
      },
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>NAVER</div>
        <div className={styles.loginBox}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className={styles.inputGroup}>
                <LoginInput name="id" label="아이디" />
              </div>
              <div className={styles.inputGroup}>
                <LoginInput name="password" label="비밀번호" type="password" />
              </div>

              <div className={styles.rememberMe}>
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={isRemember}
                  onChange={toggleRemember}
                />
                <label htmlFor="rememberMe">로그인 상태 유지</label>
              </div>
              <button type="submit" className={styles.loginButton}>
                로그인
              </button>
            </form>
          </FormProvider>
          <div className={styles.helpLinks}>
            <Link href="#">비밀번호 찾기</Link>
            <Link href="#">아이디 찾기</Link>
            <Link href="/user/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
