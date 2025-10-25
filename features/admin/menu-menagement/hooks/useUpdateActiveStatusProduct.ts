import { MutationConfig, queryClient } from "@/lib/reactQuery";
import { useMutation } from "@tanstack/react-query";
import { getProductsQueryKey } from "./useGetProducts";
import { updateActiveStatusProduct } from "../api/updateActiveStatusProduct";

export type UseUpdateActiveStatusProductParams = {
  mutationConfig?: MutationConfig<typeof updateActiveStatusProduct>;
};

export const useUpdateActiveStatusProduct = (
  params: UseUpdateActiveStatusProductParams
) => {
  return useMutation({
    mutationFn: updateActiveStatusProduct,
    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({
        queryKey: getProductsQueryKey({}),
        exact: false,
      });

      params.mutationConfig?.onSuccess?.(
        data,
        variables,
        onMutateResult,
        context
      );
    },

    ...params.mutationConfig,
  });
};
