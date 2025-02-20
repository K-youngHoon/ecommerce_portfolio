import { User, userSchema } from "./model";
import { userRepository } from "./repository";
import { userService } from "./service";
import { ICreateUserParams } from "./type";

export const userUsecase = {
  getUser: async (id: string): Promise<User | null> => {
    return userRepository.getUser(id); // 애플리케이션 계층에서 Repository 사용
  },
  delUser: async (id: string): Promise<Response | null> => {
    return userRepository.deleteUser(id); // 애플리케이션 계층에서 Repository 사용
  },
  updateUser: async (id: string, user: User): Promise<User | null> => {
    return userRepository.updateUser(id, user); // 애플리케이션 계층에서 Repository 사용
  },

  createUser: async (params: ICreateUserParams) => {
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
