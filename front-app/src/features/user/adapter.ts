import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userUsecase, User } from "./";
import { userKeys } from "@src/const";
import { ZodError } from "zod";

export const useGetUser = (id: string) => {
  return useQuery({
    queryKey: userKeys.detailById(id),
    queryFn: () => userUsecase.getUser(id),
    enabled: Boolean(id),
  });
};

// export const useCreateUser = () => {
//   return useAuthMutation({
//     mutationFn: userUsecase.createUser,
//   });
// };
export const useCreateUser = () => {
  return useMutation({
    mutationFn: userUsecase.createUser,
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userUsecase.delUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: User) => userUsecase.updateUser(user),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: userKeys.detailById(variables.id),
      });
    },
  });
};
//() => mutate(user.id , user)
