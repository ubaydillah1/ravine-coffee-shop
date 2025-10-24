import { queryOptions, useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  getRevenue,
  GetRevenuePayload,
  RevenuePeriod,
} from "../api/getRevenue";
import { QueryConfig } from "@/lib/reactQuery";

export const getRevenueQueryKey = (period: RevenuePeriod) => [
  "revenue",
  period,
];

const getRevenueQueryOptions = (period: RevenuePeriod) => {
  return queryOptions<GetRevenuePayload[]>({
    queryKey: getRevenueQueryKey(period),
    queryFn: () => getRevenue(period),
  });
};
type UseGetRevenueParams = {
  period: RevenuePeriod;
  queryConfig?: QueryConfig<typeof getRevenueQueryOptions>;
};

type UseRevenueResult = UseQueryResult<GetRevenuePayload[] | undefined, Error>;

export const useGetRevenue = ({
  period,
  queryConfig,
}: UseGetRevenueParams): UseRevenueResult => {
  return useQuery({
    ...getRevenueQueryOptions(period),
    ...queryConfig,
  });
};
