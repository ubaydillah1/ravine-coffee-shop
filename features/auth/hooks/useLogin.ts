import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { login } from "../api/login";
import { MutationConfig, queryClient } from "@/lib/reactQuery";

type useLoginParams = {
  mutationConfig?: MutationConfig<typeof login>;
};

export const useLogin = (params: useLoginParams = {}) => {
  const { login: loginStore } = useAuthStore();

  return useMutation({
    ...params.mutationConfig,
    mutationFn: login,
    onSuccess: (data, variables, onMutateResult, context) => {
      loginStore(data.token, data.user);
      queryClient.invalidateQueries({ queryKey: ["me"] });
      params.mutationConfig?.onSuccess?.(
        data,
        variables,
        onMutateResult,
        context
      );
    },
  });
};
