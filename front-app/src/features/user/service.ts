import { z, ZodError } from "zod";
import {
  updateUserSchema,
  User,
  userRepository,
  UpdateUser,
  signUpUserSchema,
  loginUserSchema,
  LoginUser,
} from "./";

export const userService = {
  login: async (loginUser: LoginUser) => {
    const parsedResult = await loginUserSchema.parseAsync(loginUser);

    // if (!parsedResult.success) {
    //   throw parsedResult.error;
    // }

    const { data } = await userRepository.login(parsedResult);

    return data;
  },

  checkEmail: async (email: string) => {
    const { data } = await userRepository.checkEmail(email);

    return data.success;
  },

  getUser: async (id: string) => {
    if (!id) {
      throw new Error("잘못된 id입니다.");
    }

    const { data } = await userRepository.getUser(id);

    return data;
  },

  delUser: async (id: string) => {
    await userRepository.deleteUser(id);
    return { success: true };
  },

  updateUser: async (userData: UpdateUser) => {
    if (!userData?.id) {
      throw new Error("아이디는 필수사항 입니다.");
    }

    const validatedData = await updateUserSchema.parseAsync(userData);

    const { data: user } = await userRepository.getUser(userData.id);

    const updatedUser = { ...user, ...validatedData };
    const { data } = await userRepository.updateUser(user.id, updatedUser);

    return data;
  },

  createUser: async (params: User) => {
    // const parsedResult = userSchema.safeParse(params);
    const parsedResult = await signUpUserSchema.parseAsync(params);

    // 3) 저장
    const savedUser = await userRepository.createUser(parsedResult);
    return savedUser;
  },
};
