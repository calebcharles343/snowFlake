import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateCurrentUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User account successfully updated");
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
