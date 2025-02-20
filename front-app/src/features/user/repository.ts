import axios from "axios";
import { User } from "./model";

export const userRepository = {
  async getUser(id: string): Promise<User | null> {
    const { data } = await axios.get(`/api/users/${id}`);
    return data ?? null;
  },

  async createUser(user: User): Promise<User> {
    const { data } = await axios.post("/api/users", user);
    return data;
  },
  async deleteUser(id: string): Promise<Response> {
    return await axios.delete(`/api/items/${id}`, { method: "DELETE" });
  },
  async updateUser(id: string, user: User): Promise<User> {
    const { data } = await axios.post(`/api/items/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return data;
  },
};
