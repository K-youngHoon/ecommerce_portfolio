import { User } from "./user.model";

// 순수 함수 예시
export function canUserRegister(user: User): boolean {
  return user.age >= 18; // 예시 비즈니스 규칙
}

export function renameUser(user: User, newName: string): User {
  return {
    ...user,
    name: newName,
  };
}
