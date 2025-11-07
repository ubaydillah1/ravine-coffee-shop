import { MutationConfig, queryClient } from "@/lib/reactQuery";
import { updateStatus } from "../api/updateStatus";
import { useMutation } from "@tanstack/react-query";
import { getCashiersQueryKey } from "./useGetCashiers";

type UseUpdateStatusUserProps = {
  mutationConfig?: MutationConfig<typeof updateStatus>;
};

export const useUpdateStatusUser = (params: UseUpdateStatusUserProps) => {
  return useMutation({
    ...params.mutationConfig,
    mutationFn: updateStatus,
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
