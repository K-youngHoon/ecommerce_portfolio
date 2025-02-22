import { User, userSchema } from "./model";
import { userRepository } from "./repository";
import { userService } from "./service";

export const userUsecase = {
  getUser: async (id: string) => {
    const user = await userRepository.getUser(id);
    if (!user) throw new Error("사용자를 찾을 수 없습니다.");
    return user;
  },

  delUser: async (id: string) => {
    const user = await userRepository.getUser(id);
    if (!user) throw new Error("삭제할 사용자가 없습니다.");
    await userRepository.deleteUser(id);
    return { success: true };
  },

  updateUser: async (id: string, userData: Partial<User>) => {
    const user = await userRepository.getUser(id);
    if (!user) throw new Error("업데이트할 사용자가 없습니다.");

    if (userData.name && userData.name.length < 3) {
      throw new Error("이름은 3글자 이상이어야 합니다.");
    }

    const updatedUser = { ...user, ...userData };
    return userRepository.updateUser(id, updatedUser);
  },

  createUser: async (params: User) => {
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
    const savedUser = await userRepository.createUser(user);
    return savedUser;
  },
};
