import { z } from "zod";

export const userSchema = z.object({
  id: z
    .string()
    .min(1, "아이디는 필수 입력사항입니다.")
    .min(3, "아이디는 최소 3자 이상 입력하세요."),
  email: z.string().email("이메일형식이 올바르지 않습니다."),
  name: z.string().min(3),
});

export const updateUserSchema = userSchema.partial();

export type UpdateUser = z.infer<typeof updateUserSchema>;
export type User = z.infer<typeof userSchema>;

// 회원가입 스키마 (추가 필드 포함)

const baseSignUpUserSchema = userSchema.extend({
  password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다."),
  phone: z.string().min(10, "전화번호 형식이 올바르지 않습니다."),
  confirmPassword: z
    .string()
    .min(6, "비밀번호 확인도 최소 6자 이상이어야 합니다."),
});

export const signUpUserSchema = baseSignUpUserSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  }
);

export type SignUpUser = z.infer<typeof signUpUserSchema>;

// 로그인 스키마 (비밀번호만 추가)
export const loginUserSchema = baseSignUpUserSchema.pick({
  id: true,
  password: true,
});
// export const loginUserSchema = z.object({
//   id: baseUserSchema.shape.id,
//   password: signUpUserSchema._def.schema.shape.password,
// });

export type LoginUser = z.infer<typeof loginUserSchema>;
