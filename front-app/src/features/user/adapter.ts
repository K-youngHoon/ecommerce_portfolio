import { useQuery, useMutation } from "@tanstack/react-query";
import { createUser } from "./application";
import { userApi } from "./api";

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => userApi.getUser(id),
    enabled: Boolean(id),
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (params: { id: string; name: string; age: number }) =>
      createUser(params),
  });
};
