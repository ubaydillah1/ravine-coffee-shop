import { MutationConfig, queryClient } from "@/lib/reactQuery";
import { createProduct } from "../api/createProduct";
import { useMutation } from "@tanstack/react-query";
import { getProductsQueryKey } from "./useGetProducts";
import { getTotalProductsQueryKey } from "../api/getTotalProducts";

export type UseCreateProductParams = {
  mutationConfig?: MutationConfig<typeof createProduct>;
};

export const useCreateProduct = (params: UseCreateProductParams) => {
  return useMutation({
    ...params.mutationConfig,
    mutationFn: createProduct,
    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({
        queryKey: getProductsQueryKey({}),
        exact: false,
      });

      queryClient.invalidateQueries({
        queryKey: getTotalProductsQueryKey(),
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
