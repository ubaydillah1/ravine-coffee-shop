import { MutationConfig } from "@/lib/reactQuery";
import { deleteAvatar } from "../api/deleteAvatar";
import { useMutation } from "@tanstack/react-query";

type UseDeleteAvatarParams = {
  mutationConfig?: MutationConfig<typeof deleteAvatar>;
};

export const useDeleteAvatar = (params: UseDeleteAvatarParams) => {
  return useMutation({
    ...params.mutationConfig,
    mutationFn: deleteAvatar,
  });
};
