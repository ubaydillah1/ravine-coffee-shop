import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import {
  getProducts,
  GetProductsParams,
  Productresponse,
} from "../api/getProducts";
import { QueryConfig } from "@/lib/reactQuery";

export const getProductsQueryKey = ({
  category,
  cursor,
  limit,
  search,
}: GetProductsParams) => ["products", { category, cursor, limit, search }];

const getProductsQueryOptions = (params: GetProductsParams) => {
  return infiniteQueryOptions({
    queryKey: getProductsQueryKey(params),
    queryFn: ({ pageParam = null }) =>
      getProducts({ ...params, cursor: pageParam }),
    getNextPageParam: (lastPage: Productresponse) =>
      lastPage.nextCursor ?? undefined,
    initialPageParam: null,
  });
};

type UseGetProductParams = GetProductsParams & {
  queryConfig?: QueryConfig<typeof getProductsQueryOptions>;
};

export const useGetProducts = (params: UseGetProductParams) => {
  return useInfiniteQuery({
    ...getProductsQueryOptions(params),
    ...params.queryConfig,
  });
};
