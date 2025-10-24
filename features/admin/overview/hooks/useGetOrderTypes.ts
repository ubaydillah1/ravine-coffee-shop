import { queryOptions, useQuery } from "@tanstack/react-query";
import { Period } from "../api/getOverview";
import { getOrderTypes } from "../api/getOrderTypes";
import { QueryConfig } from "@/lib/reactQuery";

export const getOrderTypesQueryKey = (period: Period) => [
  "order-types",
  period,
];

const getOrderTypesQueryOptions = (period: Period) => {
  return queryOptions({
    queryKey: getOrderTypesQueryKey(period),
    queryFn: () => getOrderTypes(period),
  });
};

type UseGetOrderTypesParams = {
  period: Period;
  queryConfig?: QueryConfig<typeof getOrderTypesQueryOptions>;
};

export const useGetOrderTypes = ({
  period,
  queryConfig,
}: UseGetOrderTypesParams) => {
  return useQuery({
    ...getOrderTypesQueryOptions(period),
    ...queryConfig,
  });
};
