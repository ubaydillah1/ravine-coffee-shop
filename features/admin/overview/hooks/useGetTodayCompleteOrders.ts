import { queryOptions, useQuery } from "@tanstack/react-query";
import { QueryConfig } from "@/lib/reactQuery";
import { getTodayCompletedOrders } from "../api/getTodayCompleteOrders";

export const getTodayComplestedOrdersQueryKey = () => ["todayCompletedOrders"];

export const getTodayCompletedOrdersQueryOptions = () => {
  return queryOptions({
    queryKey: getTodayComplestedOrdersQueryKey(),
    queryFn: getTodayCompletedOrders,
  });
};

type UseGetTodayCompletedOrdersParams = {
  queryConfig?: QueryConfig<typeof getTodayCompletedOrdersQueryOptions>;
};

export const useGetTodayCompletedOrders = (
  params: UseGetTodayCompletedOrdersParams = {}
) => {
  return useQuery({
    ...getTodayCompletedOrdersQueryOptions(),
    ...params.queryConfig,
  });
};
