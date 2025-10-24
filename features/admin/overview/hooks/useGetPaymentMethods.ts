import { queryOptions, useQuery } from "@tanstack/react-query";
import { Period } from "../api/getOverview";
import { getPaymentMethods } from "../api/getPaymentMethods";
import { QueryConfig } from "@/lib/reactQuery";

export const getPaymentMethodsQueryKey = (period: Period) => [
  "payment-methods",
  period,
];

const getPaymentMethodsQueryOptions = (period: Period) => {
  return queryOptions({
    queryKey: getPaymentMethodsQueryKey(period),
    queryFn: () => getPaymentMethods(period),
  });
};

type UseGetPaymentMethodsParams = {
  period: Period;
  queryConfig?: QueryConfig<typeof getPaymentMethodsQueryOptions>;
};

export const useGetPaymentMethods = (params: UseGetPaymentMethodsParams) => {
  return useQuery({
    ...getPaymentMethodsQueryOptions(params.period),
    ...params.queryConfig,
  });
};
