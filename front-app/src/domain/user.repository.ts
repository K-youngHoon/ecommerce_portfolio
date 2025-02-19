import { User } from "./user.model";

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<User>;
  // 그 외 필요한 메서드들
}
