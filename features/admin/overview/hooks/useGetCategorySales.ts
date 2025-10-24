import { queryOptions, useQuery } from "@tanstack/react-query";
import { Period } from "../api/getOverview";
import { getCategorySales } from "../api/getCategorySales";
import { QueryConfig } from "@/lib/reactQuery";

export const getCategorySalesQueryKey = (period: Period) => [
  "category-sales",
  period,
];

const getCategorySalesQueryOptions = (period: Period) => {
  return queryOptions({
    queryKey: getCategorySalesQueryKey(period),
    queryFn: () => getCategorySales(period),
  });
};

type getCategorySalesParams = {
  period: Period;
  queryConfig?: QueryConfig<typeof getCategorySalesQueryOptions>;
};

export const useGetCategorySales = ({
  period,
  queryConfig,
}: getCategorySalesParams) => {
  return useQuery({
    ...getCategorySalesQueryOptions(period),
    ...queryConfig,
  });
};
