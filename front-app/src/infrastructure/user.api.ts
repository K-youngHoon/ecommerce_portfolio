import axios from "axios";
import { UserRepository } from "@src/domain/user.repository";
import { User } from "@src/domain/user.model";

// 예: HTTP API 기반 Repository
export class UserHttpRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const { data } = await axios.get(`/api/users/${id}`);
    return data ?? null;
  }

  async save(user: User): Promise<User> {
    const { data } = await axios.post("/api/users", user);
    return data;
  }
}
