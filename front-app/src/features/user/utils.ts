import { User } from "./";

export const userUtils = {
  rename: (user: User, newName: string): User => {
    return {
      ...user,
      name: newName,
    };
  },
};
