import { api } from "@src/utils";
import { IApiResponseSuccess } from "@src/const";
import { LoginUser, User } from "./";

export const userRepository = {
  async login(loginUser: LoginUser) {
    const { data } = await api.post<IApiResponseSuccess<User>>(
      `/api/users/login`,
      loginUser
    );

    return data;
  },

  async checkEmail(email: string) {
    const { data } = await api.post<IApiResponseSuccess<{ success: true }>>(
      `/auth/check-duplicate`,
      { email }
    );

    return data;
  },

  async getUser(id: string) {
    const { data } = await api.get<IApiResponseSuccess<User>>(
      `/api/users/${id}`
    );
    return data;
  },

  async createUser(user: User) {
    const { data } = await api.post<IApiResponseSuccess<User>>(
      "/api/users",
      user
    );
    return data;
  },

  async deleteUser(id: string) {
    const { data } = await api.delete<
      IApiResponseSuccess<{ success: boolean }>
    >(`/api/items/${id}`, {
      method: "DELETE",
    });

    return data;
  },

  async updateUser(id: string, user: User) {
    const { data } = await api.put<IApiResponseSuccess<User>>(
      `/api/items/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    return data;
  },
};
