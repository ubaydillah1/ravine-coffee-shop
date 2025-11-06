import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import { GetOrdersParams, GetOrdersResponse } from "../types";
import { getOrders } from "../api/getOrders";
import { QueryConfig } from "@/lib/reactQuery";

export const getOrdersQueryKey = (params: GetOrdersParams) => [
  "cashier-orders",
  params,
];

const getOrdersQueryOptions = (params: GetOrdersParams) => {
  return infiniteQueryOptions({
    queryKey: getOrdersQueryKey(params),
    queryFn: ({ pageParam = null }) =>
      getOrders({ ...params, cursor: pageParam }),
    getNextPageParam: (lastPage: GetOrdersResponse) =>
      lastPage.nextCursor ?? undefined,
    initialPageParam: null,
  });
};

type UseGetOrdersParams = GetOrdersParams & {
  queryConfig?: QueryConfig<typeof getOrdersQueryOptions>;
};

export const useGetOrders = (params: UseGetOrdersParams) => {
  return useInfiniteQuery({
    ...getOrdersQueryOptions(params),
    ...params.queryConfig,
  });
};
