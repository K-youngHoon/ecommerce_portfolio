import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService, User } from "./";
import { userKeys } from "@src/const";

export const useGetUser = (id: string) => {
  return useQuery({
    queryKey: userKeys.detailById(id),
    queryFn: () => userService.getUser(id),
    enabled: Boolean(id),
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: userService.login,
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: userService.createUser,
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.delUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: User) => userService.updateUser(user),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: userKeys.detailById(variables.id),
      });
    },
  });
};
//() => mutate(user.id , user)
