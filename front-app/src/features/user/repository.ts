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
};
