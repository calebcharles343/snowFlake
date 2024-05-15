import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useDebounce from "../../helpers/useDebounce";
import { Coin } from "../../Interfaces";

import { useCrypto } from "./useCrypto";

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  height: 50px;
  font-size: 18px;
  padding: 10px;
  width: 26rem;
`;

const StyleCoinList = styled.div`
  background-color: var(--color-grey-50);
  border-radius: 2%;
  padding: 1rem;

  font-size: medium;

  min-width: 26rem;

  position: absolute;
  top: 7.3rem;
  left: 34.8rem;
  z-index: 99999999;
  overflow: hidden;
`;

const StyledSearchLink = styled(Link)`
  &:link,
  &:visited {
    display: flex;

    gap: 1.2rem;

    color: Var(--color-grey-500);

    font-weight: 500;
    padding: 0.2rem 0.2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: Var(--color-brand-600);
    // background-color: white;
    border-right: 3px solid var(--color-brand-500);
  }
`;

function HomeSearchList() {
  const [querry, setQuerry] = useState("");
  const debouncedSearch = useDebounce(querry, 500);
  const [isOpen, setIsOpen] = useState(false);
  const [searchList, setSearchList] = useState([]);

  const { isLoading, coins } = useCrypto();

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setQuerry(e.target.value);
    setIsOpen(true);
  }

  useEffect(
    function () {
      if (isLoading) return;
      const res = coins?.filter((coin: Coin) =>
        coin.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );

      if (querry.length > 0) {
        setIsOpen(true);
      } else setIsOpen(false);
      if (querry.length > 0) setSearchList(res);
    },
    [debouncedSearch, querry]
  );

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <StyledSearch>
        <span>SEARCH</span>
        <StyledInput
          type="text"
          placeholder="coin name"
          value={querry}
          onChange={handleSearch}
        />
      </StyledSearch>
      {isOpen && (
        <StyleCoinList>
          {searchList?.map((coin: Coin) => (
            <div key={coin.uuid} onClick={handleClose}>
              <StyledSearchLink to={`chart/:${coin.name}`}>
                {coin.name}
              </StyledSearchLink>
            </div>
          ))}
        </StyleCoinList>
      )}
    </>
  );
}

export default HomeSearchList;
