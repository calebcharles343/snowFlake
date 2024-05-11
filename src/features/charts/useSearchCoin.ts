import { Coin } from "../../Interfaces";
import { useCrypto } from "../home/useCrypto";

export function useSearchCoin(coinName: string) {
  const { isLoading, coins } = useCrypto();

  if (isLoading) return null;
  const chartCoin = coins.find((coin: Coin) => ":" + coin.name === coinName);

  return chartCoin;
}
