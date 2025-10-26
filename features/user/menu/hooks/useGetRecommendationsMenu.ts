import { queryOptions, useQuery } from "@tanstack/react-query";
import { getRecommendationsMenu } from "../api/getRecommendationsMenu";
import { QueryConfig } from "@/lib/reactQuery";

export const getRecommendationsMenuQueryKey = () => ["recommendations-menu"];

const getRecommendationMenuQueryOptions = () => {
  return queryOptions({
    queryKey: getRecommendationsMenuQueryKey(),
    queryFn: getRecommendationsMenu,
  });
};

type UseGetRecommedationMenuParams = {
  queryConfig?: QueryConfig<typeof getRecommendationMenuQueryOptions>;
};

export const useGetRecommendationsMenu = (
  params: UseGetRecommedationMenuParams
) => {
  return useQuery({
    ...getRecommendationMenuQueryOptions(),
    ...params,
  });
};
