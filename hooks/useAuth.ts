import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";

export const useMeQuery = () => {
  const { isAuthenticated } = useAuthStore();
  return useQuery({
    queryKey: ["me"],
    queryFn: authService.getMe,
    enabled: !!isAuthenticated,
  });
};
