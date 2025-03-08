import { useForm } from "react-hook-form";
import {
  SignUpUser,
  signUpUserSchema,
  useCreateUser,
} from "@src/features/user";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useUpdateEffect } from "react-use";
// import { ZodError } from "zod";
import { parseZodErrors } from "@src/utils";

function SignUpPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpUser>();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<SignUpUser>({
  //   resolver: zodResolver(signUpUserSchema),
  // });

  const mutation = useCreateUser();

  const onSubmit = (data: SignUpUser) => {
    mutation.mutate(data, {
      onError: (error) => {
        const errorMessages = parseZodErrors(error);

        Object.entries(errorMessages).forEach(([key, message]) => {
          setError(key as keyof SignUpUser, {
            type: "manual",
            message,
          });
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>ID</label>
        <input type="text" {...register("id")} />
        {errors.id && <span>{errors.id.message}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>전화번호</label>
        <input type="text" {...register("phone")} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <div>
        <label>비밀번호</label>
        <input type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label>비밀번호 확인</label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignUpPage;
