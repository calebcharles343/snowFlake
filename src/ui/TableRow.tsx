import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { TableCoinsT } from "../Interfaces";

import { formatCurrency } from "../utils/helpers";

const TableRows = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.4fr 1fr 0.8fr 0.8fr;
  /* column-gap: 2.4rem; */
  align-items: center;
  padding: 1.4rem 2.4rem;
  font-size: 2rem;
  color: var(--color-grey-500);

  border: 1px solid var(--color-grey-300);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const SN = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid var(--color-grey-300);
`;

const Img = styled.img`
  display: block;
  height: 1.5rem;
  width: 2rem;
  border-radius: 100%;

  margin-left: 2.8rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const CoinName = styled.div`
  font-weight: 600;
  font-family: "Sono";
`;

interface priceT {
  change: number;
}
const Price = styled.div<priceT>`
  font-family: "Sono";
  font-weight: 600;
  ${({ change }) =>
    change > 0 &&
    css`
      color: green;
    `}
  ${({ change }) =>
    change < 0 &&
    css`
      color: red;
    `}
`;

interface ChangeT {
  change: number;
}
const Change = styled.div<ChangeT>`
  font-family: "Sono";
  font-weight: 600;
  ${({ change }) =>
    change > 0 &&
    css`
      color: green;
    `}
  ${({ change }) =>
    change < 0 &&
    css`
      color: red;
    `}
`;
interface TableRowT {
  coin: TableCoinsT;
  index: number;
}

function TableRow({ coin, index }: TableRowT) {
  return (
    <TableRows>
      <SN>{index + 1}</SN>
      <Link to={`chart/:${coin.name}`}>
        {" "}
        <Img src={coin.iconUrl} />
      </Link>
      <Link to={`chart/:${coin.name}`}>
        {" "}
        <CoinName>{coin.name}</CoinName>
      </Link>
      <Link to={`chart/:${coin.name}`}>
        <Price change={Number(coin.change)}>
          {Number(coin.price) > 1
            ? formatCurrency(Number(coin.price))
            : Number(coin.price).toFixed(8)}
        </Price>
      </Link>
      <Link to={`chart/:${coin.name}`}>
        <Change change={Number(coin.change)}>{`${Math.abs(
          Number(coin.change)
        )} %`}</Change>
      </Link>
    </TableRows>
  );
}

export default TableRow;
