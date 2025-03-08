import { useForm } from "react-hook-form";
import {
  SignUpUser,
  signUpUserSchema,
  useCreateUser,
} from "@src/features/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateEffect } from "react-use";

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpUser>({
    resolver: zodResolver(signUpUserSchema),
  });

  const mutation = useCreateUser();

  const onSubmit = (data: SignUpUser) => {
    console.log("회원가입 시도", data);
    mutation.mutate(data);
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
