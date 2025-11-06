import { MutationConfig, queryClient } from "@/lib/reactQuery";
import { updateStatusOrder } from "../api/updateStatusOrder";
import { useMutation } from "@tanstack/react-query";
import { getOrderByIdQueryKey } from "./useGetOrderById";
import { getOrdersQueryKey } from "./useGetOrders";

export type UpdateStatusOrderPayload = {
  mutationConfig?: MutationConfig<typeof updateStatusOrder>;
};

export const useUpdateStatusOrder = (params: UpdateStatusOrderPayload) => {
  return useMutation({
    ...params.mutationConfig,
    mutationFn: updateStatusOrder,
    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({
        queryKey: getOrdersQueryKey({}),
        exact: false,
      });

      queryClient.invalidateQueries({
        queryKey: getOrderByIdQueryKey(variables.id),
        exact: false,
      });

      params.mutationConfig?.onSuccess?.(
        data,
        variables,
        onMutateResult,
        context
      );
    },
  });
};
