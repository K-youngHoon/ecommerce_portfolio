import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(3),
  age: z.number().int().min(18, { message: "가입 불가 사용자입니다." }),
});

export const updateUserSchema = userSchema.partial();

export type UpdateUser = z.infer<typeof updateUserSchema>;

export type User = z.infer<typeof userSchema>;
