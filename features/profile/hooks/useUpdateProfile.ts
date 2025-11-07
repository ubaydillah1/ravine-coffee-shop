import { MutationConfig } from "@/lib/reactQuery";
import { updateProfile } from "../api/updateProfile";
import { useMutation } from "@tanstack/react-query";

type UseUpdateProfileParams = {
  mutationConfig?: MutationConfig<typeof updateProfile>;
};

export const UseUpdateProfile = (params: UseUpdateProfileParams) =>
  useMutation({
    ...params.mutationConfig,
    mutationFn: updateProfile,
    onSuccess: (data, variables, onMutateResult, context) => {
      params.mutationConfig?.onSuccess?.(
        data,
        variables,
        onMutateResult,
        context
      );
    },
  });
