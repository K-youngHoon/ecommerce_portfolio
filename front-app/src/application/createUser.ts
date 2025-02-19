import { userSchema } from "@src/domain/user.model";
import { UserRepository } from "@src/domain/user.repository";
import { canUserRegister } from "@src/domain/user.service";

interface CreateUserParams {
  id: string;
  name: string;
  age: number;
}

export async function createUser(
  repo: UserRepository,
  params: CreateUserParams
) {
  // 1) 데이터 구조 검증 (Zod 스키마)
  const parsedResult = userSchema.safeParse(params);
  if (!parsedResult.success) {
    throw new Error("유효하지 않은 User 데이터");
  }
  const user = parsedResult.data;

  // 2) 도메인 로직
  if (!canUserRegister(user)) {
    throw new Error("가입 불가 사용자입니다.");
  }

  // 3) 저장
  const savedUser = await repo.save(user);
  return savedUser;
}
