import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import { getHistories } from "../api/getHistories";
import { QueryConfig } from "@/lib/reactQuery";
import { GetHistoriesParams, GetHistoriesPayload } from "../types";

export const getHistoriesQueryKey = (params?: GetHistoriesParams) => [
  "histories",
  params,
];

export const getHistoriesQueryOptions = (params: GetHistoriesParams) => {
  return infiniteQueryOptions({
    queryKey: getHistoriesQueryKey(params),
    queryFn: ({ pageParam }: { pageParam?: string | null }) =>
      getHistories({
        ...params,
        cursor: pageParam ?? null,
      }),
    getNextPageParam: (lastPage: GetHistoriesPayload) =>
      lastPage.nextCursor ?? undefined,
    initialPageParam: null,
  });
};

type UseGetHistoriesParams = GetHistoriesParams & {
  queryConfig?: QueryConfig<typeof getHistoriesQueryOptions>;
};

export const useGetHistories = (params: UseGetHistoriesParams) => {
  return useInfiniteQuery({
    ...getHistoriesQueryOptions(params),
    ...params.queryConfig,
  });
};
