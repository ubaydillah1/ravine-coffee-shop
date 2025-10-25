import { queryOptions, useQuery } from "@tanstack/react-query";
import { getSummary } from "../api/getSummary";
import { QueryConfig } from "@/lib/reactQuery";

export const getSummaryQueryKey = () => ["summary"];

const getSummaryQueryOptions = () => {
  return queryOptions({
    queryKey: getSummaryQueryKey(),
    queryFn: getSummary,
  });
};

export type UseGetSummaryParams = {
  queryConfig?: QueryConfig<typeof getSummaryQueryOptions>;
};

export const useGetSummary = ({ queryConfig }: UseGetSummaryParams) => {
  return useQuery({
    ...getSummaryQueryOptions(),
    ...queryConfig,
  });
};
