import { updateUserSchema, User, userSchema, userRepository } from "./";

export const userUsecase = {
  getUser: async (id: string) => {
    const user = await userRepository.getUser(id);
    if (!user?.data) throw new Error("사용자를 찾을 수 없습니다.");
    return user.data;
  },

  delUser: async (id: string) => {
    const user = await userRepository.getUser(id);
    if (!user) throw new Error("삭제할 사용자가 없습니다.");
    await userRepository.deleteUser(id);
    return { success: true };
  },

  updateUser: async (id: string, userData: Partial<User>) => {
    const validatedData = updateUserSchema.parse(userData);

    const user = await userRepository.getUser(id);
    if (!user?.data) throw new Error("업데이트할 사용자가 없습니다.");

    const updatedUser = { ...user.data, ...validatedData };
    return userRepository.updateUser(id, updatedUser);
  },

  createUser: async (params: User) => {
    // 1) 데이터 구조 검증 (Zod 스키마)
    const parsedResult = userSchema.safeParse(params);
    if (!parsedResult.success) {
      throw new Error("유효하지 않은 User 데이터");
    }
    const user = parsedResult.data;

    // 3) 저장
    const savedUser = await userRepository.createUser(user);
    return savedUser;
  },
};
