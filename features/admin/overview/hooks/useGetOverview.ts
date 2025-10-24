import { queryOptions, useQuery } from "@tanstack/react-query";
import { getOverview, Period } from "../api/getOverview";
import { QueryConfig } from "@/lib/reactQuery";

export const getOverviewQueryKey = (period: Period) => ["overview", period];

const getOverviewQueryOptions = (period: Period) => {
  return queryOptions({
    queryKey: getOverviewQueryKey(period),
    queryFn: () => getOverview(period),
  });
};

type UseGetOvervieParams = {
  period: Period;
  queryConfig?: QueryConfig<typeof getOverviewQueryOptions>;
};

export const useGetOverview = ({
  period,
  queryConfig,
}: UseGetOvervieParams) => {
  return useQuery({
    ...getOverviewQueryOptions(period),
    ...queryConfig,
  });
};
