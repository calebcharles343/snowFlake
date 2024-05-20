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
import styled, { css } from "styled-components";
import { useSearchCoin } from "../features/charts/useSearchCoin";
import { useCrypto } from "../features/home/useCrypto";
import Spinner from "./Spinner";
import { formatCurrency } from "../utils/helpers";
import Heading from "./Heading";

const StyledAreaChartUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  height: 40vmax;
  padding: 5.5rem;
  margin-top: 5rem;
`;

const StyledChartHeadingContainer = styled.div`
  margin-left: 5.5rem;
`;

interface StyledChartSpanT {
  change: number;
}
const StyledChartSpan = styled.span<StyledChartSpanT>`
  font-weight: 600;
  ${({ change }) =>
    change > 0 &&
    css`
      color: #00c49f;
    `}
  ${({ change }) =>
    change < 0 &&
    css`
      color: #ff8042;
    `}
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

  // const sparks = sparkline.map((spark: string, i: number) => {
  //   if (i !== 23) return spark;
  // });

  // console.log(sparks);

  let labels: string[] = [];

  sparkline.map((_: number, index: number) => labels.push(index.toString()));

  const data = sparkline.map((spark: string, i: number) => {
    return {
      name: i.toString(),
      uv: Number(spark),
    };
  });

  const name = chartCoin?.name || localStorageCoinData?.name || "Bitcoin";
  const price = chartCoin?.price || localStorageCoinData?.price || "Bitcoin";
  const change = chartCoin?.change || localStorageCoinData?.change || "Bitcoin";

  return (
    <StyledAreaChartUI>
      <StyledChartHeadingContainer>
        <Heading as="h2">
          <StyledChartSpan change={Number(change)}>
            {`${name} is now at ${
              price > 1
                ? formatCurrency(Number(price))
                : Number(price).toFixed(8)
            } and ${Number(change) > 0 ? "up" : "down"} by ${Math.abs(
              change
            )}% today`}{" "}
          </StyledChartSpan>
        </Heading>
      </StyledChartHeadingContainer>

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
