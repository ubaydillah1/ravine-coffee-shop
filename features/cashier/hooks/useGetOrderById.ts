import { queryOptions, useQuery } from "@tanstack/react-query";
import { getOrderById } from "../api/getOrderById";
import { QueryConfig } from "@/lib/reactQuery";

export const getOrderByIdQueryKey = (orderId: string) => ["order", orderId];

const getOrderByIdQueryOptions = (orderId: string) => {
  return queryOptions({
    queryKey: getOrderByIdQueryKey(orderId),
    queryFn: () => getOrderById(orderId),
  });
};

type UseGetOrderByIdProps = {
  orderId: string;
  queryConfig?: QueryConfig<typeof getOrderByIdQueryOptions>;
};

export const UseGetOrderById = ({
  orderId,
  queryConfig,
}: UseGetOrderByIdProps) => {
  return useQuery({
    ...getOrderByIdQueryOptions(orderId),
    ...queryConfig,
  });
};
