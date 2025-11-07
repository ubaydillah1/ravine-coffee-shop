import { MutationConfig, queryClient } from "@/lib/reactQuery";
import { deleteCashier } from "../api/deleteCashier";
import { useMutation } from "@tanstack/react-query";
import { getCashiersQueryKey } from "./useGetCashiers";

type UseDeleteCashierParams = {
  mutationConfig?: MutationConfig<typeof deleteCashier>;
};

export const useDeleteCashier = ({
  mutationConfig,
}: UseDeleteCashierParams) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: deleteCashier,

    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({ queryKey: getCashiersQueryKey({}) });

      mutationConfig?.onSuccess?.(data, variables, onMutateResult, context);
    },
  });
};
