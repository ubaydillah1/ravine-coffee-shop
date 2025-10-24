import { getMe } from "@/features/auth/api/getMe";
import { useAuthStore } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

export const useMeQuery = () => {
  const { isAuthenticated } = useAuthStore();
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: !!isAuthenticated,
  });
};
