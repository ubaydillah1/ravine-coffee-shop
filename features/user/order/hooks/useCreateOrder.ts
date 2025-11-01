import { MutationConfig } from "@/lib/reactQuery";
import { createOrder } from "../api/createOrder";
import { useMutation } from "@tanstack/react-query";

export type UseCreateOrderParams = {
  mutationConfig?: MutationConfig<typeof createOrder>;
};

export const useCreateOrder = (params: UseCreateOrderParams) => {
  return useMutation({
    ...params.mutationConfig,
    mutationFn: createOrder,
  });
};
