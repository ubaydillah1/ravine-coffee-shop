import { MutationConfig, queryClient } from "@/lib/reactQuery";
import { createCashier } from "../api/createCashier";
import { useMutation } from "@tanstack/react-query";
import { getCashiersQueryKey } from "./useGetCashiers";

type CreateCashierParams = {
  mutationConfig?: MutationConfig<typeof createCashier>;
};

export const useCreateCashier = (params: CreateCashierParams) => {
  return useMutation({
    ...params.mutationConfig,
    mutationFn: createCashier,

    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({ queryKey: getCashiersQueryKey({}) });

      params.mutationConfig?.onSuccess?.(
        data,
        variables,
        onMutateResult,
        context
      );
    },
  });
};
