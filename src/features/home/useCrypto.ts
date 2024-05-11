import { useQuery } from "@tanstack/react-query";
import { getCrypto } from "../../services/apiCoinranking";

export function useCrypto() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["coins"],
    queryFn: getCrypto,
  });

  const coins = data?.coins;

  return { isLoading, coins, error };
}
