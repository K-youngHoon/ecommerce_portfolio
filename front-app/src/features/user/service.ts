import { User } from "./model";

export const userService = {
  canRegister: (user: User) => {
    return user.age >= 18; // 예시 비즈니스 규칙
  },

  rename: (user: User, newName: string): User => {
    return {
      ...user,
      name: newName,
    };
  },
};
