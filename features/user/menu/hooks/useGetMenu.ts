import { QueryConfig } from "@/lib/reactQuery";
import { getMenu } from "../api/getMenu";
import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import {
  GetProductsParams,
  ProductPayload,
} from "@/features/admin/menu-menagement/types";

export const getMenuQueryKey = (params: GetProductsParams) => ["menu", params];

const getProductsQueryOptions = (params: GetProductsParams) => {
  return infiniteQueryOptions({
    queryKey: getMenuQueryKey(params),
    queryFn: ({ pageParam }) => getMenu({ ...params, cursor: pageParam }),
    getNextPageParam: (lastPage: ProductPayload) =>
      lastPage.nextCursor ?? undefined,
    initialPageParam: null,
  });
};
export type UseGetMenuParams = GetProductsParams & {
  queryConfig?: QueryConfig<typeof getProductsQueryOptions>;
};

export const useGetMenu = (params: UseGetMenuParams) => {
  return useInfiniteQuery({
    ...getProductsQueryOptions(params),
    ...params.queryConfig,
  });
};
