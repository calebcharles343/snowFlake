import styled from "styled-components";

import { useState } from "react";
import { TableCoinsT, TableCoinT } from "../Interfaces";
import Spinner from "./Spinner";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import { useCrypto } from "../features/home/useCrypto";
import { useSearchParams } from "react-router-dom";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  // background-color: var(--color-grey-0);

  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.2fr 0.4fr 1fr 0.8fr 0.8fr;
  /* column-gap: 2.4rem; */
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const SN = styled.div`
  // border-right: 1px solid var(--color-grey-300);
`;

const Symbol = styled.div`
  /* border-right: 1px solid var(--color-grey-300); */
  margin-left: 1rem;
`;
const Name = styled.div`
  /* border-right: 1px solid var(--color-grey-300); */
`;
const Price = styled.div`
  //border-right: 1px solid var(--color-grey-300);
`;
const Change = styled.div`
  //border-right: 1px solid var(--color-grey-300);
`;

function CoinTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  // const [tcoins, setTcoinst] = useState([]);

  const { isLoading, coins } = useCrypto();
  4;

  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const tableCoins: TableCoinsT[] = coins?.map(
    (tcoins: TableCoinT, i: number) => {
      return {
        no_: i + 1,
        iconUrl: tcoins.iconUrl,
        name: tcoins.name,
        price: tcoins.price,
        change: tcoins.change,
      };
    }
  );

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPost = tableCoins.slice(firstPostIndex, lastPostIndex);

  //Sort
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction]: string[] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;

  let sortedCoins;

  if (field === "name") {
    sortedCoins = currentPost.sort(
      (a: any, b: any) => a[field].localeCompare(b[field]) * modifier
    );
  } else if (field === "price" && direction === "asc") {
    sortedCoins = currentPost.sort(
      (a: any, b: any) => Number(a[field]) - Number(b[field])
    );
  } else {
    sortedCoins = currentPost.sort(
      (a: any, b: any) => Number(b[field]) - Number(a[field])
    );
  }

  return (
    <Table role="table">
      <TableHeader role="row">
        <SN>S/N</SN>
        <Symbol>SYMBOL</Symbol>
        <Name>NAME</Name>
        <Price>Price</Price>
        <Change>CHANGE</Change>
      </TableHeader>

      {sortedCoins.map((coin, i) => (
        <TableRow coin={coin} key={coin.no_} index={i} />
      ))}
      <Pagination
        totalPosts={tableCoins.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </Table>
  );
}

export default CoinTable;
