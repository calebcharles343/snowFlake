// import { Pie } from "react-chartjs-2";
// import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import styled from "styled-components";
import { Coin } from "../../Interfaces";
import Heading from "../../ui/Heading";
import RoundPieChart from "../../ui/RoundPieChart";
import Spinner from "../../ui/Spinner";
import { useCrypto } from "./useCrypto";

const StyledMiniChartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
`;
const StyledMinChart = styled.div`
  height: 220px;
  width: 450px;
  border: 5px solid var(--color-grey-200);
  padding: 2rem;
`;

export default function HomeAssets() {
  const { isLoading, error, coins } = useCrypto();

  if (isLoading) return <Spinner />;

  //TradingVolumeData
  const homeAssetCoinsVolume = coins
    ?.sort(
      (a: Coin, b: Coin) =>
        parseFloat(b["24hVolume"]) - parseFloat(a["24hVolume"])
    )
    .filter((_: Coin, i: number) => i < 4);

  const volumeData = homeAssetCoinsVolume.map((coin: Coin) => {
    {
      return {
        name: coin.name,
        value: Number(coin["24hVolume"]),
      };
    }
  });

  //Market Change
  const homeAssetCoinsChange = coins
    ?.sort((a: Coin, b: Coin) => parseFloat(b.change) - parseFloat(a.change))
    .filter((_: Coin, i: number) => i < 4);

  const changeData = homeAssetCoinsChange.map((coin: Coin) => {
    {
      return {
        name: coin.name,
        value: Number(coin.change),
      };
    }
  });

  return (
    <StyledMiniChartContainer>
      <StyledMinChart>
        <Heading as="h5">24 hours volume dominance</Heading>
        <RoundPieChart data={volumeData} />
      </StyledMinChart>
      <StyledMinChart>
        <Heading as="h5">Top gains</Heading>
        <RoundPieChart data={changeData} />
      </StyledMinChart>
    </StyledMiniChartContainer>
  );
}
