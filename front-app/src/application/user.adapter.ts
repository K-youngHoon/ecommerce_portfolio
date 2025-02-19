import { useQuery, useMutation } from "@tanstack/react-query";
import { createUser } from "@src/application/createUser";
import { UserHttpRepository } from "@src/infrastructure/user.api";

// 의존관계 주입
const userRepo = new UserHttpRepository();

export function useUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => userRepo.findById(id),
    enabled: Boolean(id),
  });
}

export function useCreateUser() {
  return useMutation({
    mutationFn: (params: { id: string; name: string; age: number }) =>
      createUser(userRepo, params),
  });
}
