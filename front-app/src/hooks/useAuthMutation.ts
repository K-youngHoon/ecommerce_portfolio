import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { useStore } from "@src/stores";

export const useAuthMutation = <
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> => {
  const { setTokens } = useStore().auth.getState();

  return useMutation<TData, TError, TVariables, TContext>({
    ...options,
    onSuccess: (data, variables, context) => {
      if (
        data &&
        typeof data === "object" &&
        "accessToken" in data &&
        "refreshToken" in data &&
        typeof data.accessToken === "string" &&
        typeof data.refreshToken === "string"
      ) {
        setTokens(data.accessToken, data.refreshToken);
      }

      options.onSuccess?.(data, variables, context);
    },
  });
};
