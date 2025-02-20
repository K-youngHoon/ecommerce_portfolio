import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userUsecase } from "./usecase";
import { create } from "zustand";
import { User } from "./model";
import { IUserStore, userKeys } from "./type";

const queryClient = useQueryClient();

export const useUserStore = create<IUserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user: User) => set({ currentUser: user }),
}));

export const useGetUser = (id: string) => {
  return useQuery({
    queryKey: userKeys.detailById(id),
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

export const useDeleteUser = (id: string) =>
  useMutation({
    mutationFn: () => userUsecase.delUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

export const useUpdateUser = (id: string, user: User) =>
  useMutation({
    mutationFn: () => userUsecase.updateUser(id, user),
    onSuccess: (updatedItem) => {
      queryClient.setQueryData(["user"], (oldData: any) => {
        if (!oldData) return [];
        return oldData.map((item: any) =>
          item.id === updatedItem?.id ? updatedItem : item
        );
      });
    },
  });
