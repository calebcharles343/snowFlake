import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";
import { useCrypto } from "../home/useCrypto";
import { useSearchCoin } from "./useSearchCoin";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function ChartOperations() {
  const { isLoading, coins } = useCrypto();

  const params = useParams();

  const chartCoin = useSearchCoin(params.name as any);

  useEffect(() => {
    if (chartCoin) localStorage.setItem("coinData", JSON.stringify(chartCoin));
  }, [params]);

  if (isLoading) return <Spinner />;

  const x = localStorage.getItem("coinData");
  const localStorageCoinData = x ? JSON.parse(x) : null;

  const defaultSparkline = coins[0].sparkline;

  let sparkline;

  if (chartCoin) {
    sparkline = chartCoin.sparkline;
  } else if (localStorageCoinData) {
    sparkline = localStorageCoinData.sparkline;
  } else {
    sparkline = defaultSparkline;
  }

  let labels: string[] = [];

  sparkline.map((_: number, index: number) => labels.push(index.toString()));

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [...sparkline],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        backgroundColor: "white",
        //borderWidth: "5px",
      },
    ],
  };

  const name = chartCoin?.name || localStorageCoinData?.name || "Bitcoin";
  return (
    <div>
      <h1>{name}</h1>
      {sparkline ? <Line data={data} /> : <h1>you to select a coin first</h1>}
    </div>
  );
}

export default ChartOperations;
