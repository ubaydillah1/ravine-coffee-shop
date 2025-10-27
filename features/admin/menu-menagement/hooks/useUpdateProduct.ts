import { useMutation } from "@tanstack/react-query";
import { updateProduct } from "../api/updateProduct";
import { MutationConfig, queryClient } from "@/lib/reactQuery";
import { getProductsQueryKey } from "./useGetProducts";

export type UseUpdateProductParams = {
  mutationConfig?: MutationConfig<typeof updateProduct>;
};

export const useUpdateProduct = (params: UseUpdateProductParams) => {
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({
        queryKey: getProductsQueryKey({}),
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
