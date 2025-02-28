import { api } from "@src/utils";
import { IApiResponse } from "@src/types";
import { User } from "./";

export const userRepository = {
  async getUser(id: string) {
    const { data } = await api.get<IApiResponse<User | null>>(
      `/api/users/${id}`
    );
    return data;
  },

  async createUser(user: User) {
    const { data } = await api.post<IApiResponse<User>>("/api/users", user);
    return data;
  },

  async deleteUser(id: string) {
    return await api.delete<IApiResponse<{ success: boolean }>>(
      `/api/items/${id}`,
      {
        method: "DELETE",
      }
    );
  },

  async updateUser(id: string, user: User) {
    const { data } = await api.post<IApiResponse<User>>(`/api/items/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return data;
  },
};
