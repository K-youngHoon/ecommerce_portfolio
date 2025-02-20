import { useQuery, useMutation } from "@tanstack/react-query";
import { userUsecase } from "./usecase";
import { create } from "zustand";
import { User } from "./model";

export const useUserStore = create<IUserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user: User) => set({ currentUser: user }),
}));

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => userUsecase.getUser(id),
    enabled: Boolean(id),
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (params: { id: string; name: string; age: number }) =>
      userUsecase.createUser(params),
  });
};

interface IUserStore {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}
