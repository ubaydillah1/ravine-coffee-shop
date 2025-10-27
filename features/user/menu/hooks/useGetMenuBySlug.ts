import { queryOptions, useQuery } from "@tanstack/react-query";
import { getMenuBySlug } from "../api/getMenuBySlug";
import { QueryConfig } from "@/lib/reactQuery";

export const getMenuBySlugQueryKey = (slug: string) => ["menu", slug];

const getMenuByQueryOptions = (slug: string) => {
  return queryOptions({
    queryKey: getMenuBySlugQueryKey(slug),
    queryFn: () => getMenuBySlug(slug),
  });
};

type UseGetMenuBySlugParams = {
  slug: string;
  queryConfig?: QueryConfig<typeof getMenuBySlug>;
};

export const useGetMenuBySlug = ({
  slug,
  queryConfig,
}: UseGetMenuBySlugParams) => {
  return useQuery({
    ...getMenuByQueryOptions(slug),
    ...queryConfig,
  });
};
