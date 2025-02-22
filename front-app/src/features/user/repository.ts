// import axios from "axios";
import api from "@src/utils/axios.instance";
import { IApiResponse } from "@src/utils/type.generic";
import { User } from "./model";

export const userRepository = {
  async getUser(id: string) {
    const { data } = await api.get<User | null>(`/api/users/${id}`);
    return data ?? null;
  },

  async createUser(user: User) {
    const { data } = await api.post<IApiResponse<User>>("/api/users", user);
    return data;
  },
  async deleteUser(id: string) {
    return await api.delete<{}>(`/api/items/${id}`, { method: "DELETE" });
  },
  async updateUser(id: string, user: User): Promise<User> {
    const { data } = await api.post<User>(`/api/items/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return data;
  },
};
