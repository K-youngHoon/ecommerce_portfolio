import { User } from "./";

export const userService = {
  rename: (user: User, newName: string): User => {
    return {
      ...user,
      name: newName,
    };
  },
};
