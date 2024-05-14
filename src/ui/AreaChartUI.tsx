import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";
import { useSearchCoin } from "../features/charts/useSearchCoin";
import { useCrypto } from "../features/home/useCrypto";
import Spinner from "./Spinner";

const StyledAreaChartUI = styled.div`
  height: 40vmax;
`;

function AreaChartUI() {
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

  const data = sparkline.map((spark: string, i: number) => {
    return {
      name: i.toString(),
      uv: Number(spark),
    };
  });

  const name = chartCoin?.name || localStorageCoinData?.name || "Bitcoin";
  return (
    <StyledAreaChartUI>
      <span>{`${name} PRICE CHART`}</span>
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={100}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: "#00C49F" }}
            tickLine={{ fill: "#00C49F" }}
          />
          <YAxis
            unit="$"
            tick={{ fill: "#00C49F" }}
            tickLine={{ fill: "#00C49F" }}
          />
          <CartesianGrid strokeDasharray="1" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#00C49F"
            fill="#FFBB28"
            strokeWidth={2}
            name="Price"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledAreaChartUI>
  );
}

export default AreaChartUI;
