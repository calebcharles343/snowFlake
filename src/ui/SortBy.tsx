import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { SortByT } from "../Interfaces";
import Select from "./Select";

function SortBy({ options }: SortByT) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      onChange={handleChange}
      type="white"
    />
  );
}

export default SortBy;
