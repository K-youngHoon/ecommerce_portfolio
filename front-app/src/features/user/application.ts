import { userSchema } from "./model";
import { userApi } from "./api";
import { userService } from "./service";

interface CreateUserParams {
  id: string;
  name: string;
  age: number;
}

export const createUser = async (params: CreateUserParams) => {
  // 1) 데이터 구조 검증 (Zod 스키마)
  const parsedResult = userSchema.safeParse(params);
  if (!parsedResult.success) {
    throw new Error("유효하지 않은 User 데이터");
  }
  const user = parsedResult.data;

  // 2) 도메인 로직
  if (!userService.canRegister(user)) {
    throw new Error("가입 불가 사용자입니다.");
  }

  // 3) 저장
  const savedUser = await userApi.createUser(user);
  return savedUser;
};
