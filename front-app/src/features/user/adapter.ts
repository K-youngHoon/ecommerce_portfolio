import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userUsecase } from "./usecase";
import { User } from "./model";
import { userKeys } from "./type";

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

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => userUsecase.delUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, user }: { id: string; user: User }) =>
      userUsecase.updateUser(id, user),
    onSuccess: (updatedItem) => {
      if (!updatedItem?.id) return; // id가 없으면 캐싱 건너뛰기

      queryClient.setQueryData(
        userKeys.detailById(updatedItem.id),
        (oldData: any) => {
          if (!Array.isArray(oldData)) return [updatedItem]; // oldData가 배열이 아닐 경우
          return oldData.map((item: any) =>
            item.id === updatedItem.id ? updatedItem : item
          );
        }
      );
    },
  });
};

//() => mutate(user.id , user)
