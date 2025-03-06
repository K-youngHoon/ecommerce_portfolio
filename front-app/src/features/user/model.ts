import { z } from "zod";

const baseUserSchema = z.object({
  id: z.string().min(3, "아이디는 최소 3자 이상 입력하세요."),
  email: z.string().email(),
  name: z.string().min(3),
});

export const userSchema = baseUserSchema;

export const updateUserSchema = baseUserSchema.partial();

export type UpdateUser = z.infer<typeof updateUserSchema>;
export type User = z.infer<typeof userSchema>;

// 회원가입 스키마 (추가 필드 포함)
export const signUpUserSchema = baseUserSchema.extend({
  password: z.string(),
  phone: z.number(),
});

export type SignUpUser = z.infer<typeof signUpUserSchema>;

// 로그인 스키마 (비밀번호만 추가)
export const loginUserSchema = z.object({
  id: signUpUserSchema.shape.id,
  password: signUpUserSchema.shape.password,
});

export type LoginUser = z.infer<typeof loginUserSchema>;
