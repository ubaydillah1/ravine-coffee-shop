import { infiniteScrollParams } from "@/types/api";
import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import { getCashiers, GetCashiersResponse } from "../api/getCashiers";
import { QueryConfig } from "@/lib/reactQuery";

export const getCashiersQueryKey = (params: infiniteScrollParams) => [
  "cashiers",
  params,
];

const getCashiersQueryOptions = (params: infiniteScrollParams) => {
  return infiniteQueryOptions({
    queryKey: getCashiersQueryKey(params),
    queryFn: ({ pageParam = null }) =>
      getCashiers({ ...params, cursor: pageParam }),
    getNextPageParam: (lastPage: GetCashiersResponse) =>
      lastPage.nextCursor ?? undefined,
    initialPageParam: null,
  });
};

type UseGetCashiers = infiniteScrollParams & {
  queryConfig?: QueryConfig<typeof getCashiersQueryOptions>;
};

export const useGetCashiers = (params: UseGetCashiers) => {
  return useInfiniteQuery({
    ...getCashiersQueryOptions(params),
    ...params.queryConfig,
  });
};
