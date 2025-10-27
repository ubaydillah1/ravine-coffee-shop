import { MutationConfig, queryClient } from "@/lib/reactQuery";
import { deleteProduct } from "../api/deleteProduct";
import { useMutation } from "@tanstack/react-query";
import { getProductsQueryKey } from "./useGetProducts";

type UseDeleteProductParams = {
  mutationCofig?: MutationConfig<typeof deleteProduct>;
};

export const useDeleteProduct = (params: UseDeleteProductParams) => {
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data, variables, onMutateResult, context) => {
      queryClient.invalidateQueries({ queryKey: getProductsQueryKey({}) });

      params.mutationCofig?.onSuccess?.(
        data,
        variables,
        onMutateResult,
        context
      );
    },
    ...params.mutationCofig,
  });
};
