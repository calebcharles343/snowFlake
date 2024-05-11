import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function HometableOpertions() {
  return (
    <TableOperations>
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "price-asc", label: "Sort by price (low first)" },
          { value: "price-desc", label: "Sort by price (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default HometableOpertions;
