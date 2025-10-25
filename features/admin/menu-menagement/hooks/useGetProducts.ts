import { QueryConfig } from "@/lib/reactQuery";
import { getProducts } from "../api/getProducts";
import { GetProductsParams, ProductPayload } from "../types";
import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";

export const getProductsQueryKey = (params: GetProductsParams) => [
  "products",
  params,
];

const getProductsQueryOptions = (params: GetProductsParams) => {
  return infiniteQueryOptions({
    queryKey: getProductsQueryKey(params),
    queryFn: ({ pageParam }) => getProducts({ ...params, cursor: pageParam }),
    getNextPageParam: (lastPage: ProductPayload) =>
      lastPage.nextCursor ?? undefined,
    initialPageParam: null,
  });
};
export type UseGetProductsParams = GetProductsParams & {
  queryConfig?: QueryConfig<typeof getProductsQueryOptions>;
};

export const useGetProducts = (params: UseGetProductsParams) => {
  return useInfiniteQuery({
    ...getProductsQueryOptions(params),
    ...params.queryConfig,
  });
};
