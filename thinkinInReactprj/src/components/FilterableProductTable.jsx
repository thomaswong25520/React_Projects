import React, { useState } from "react";
import Search from "./Search";
import ProductTable from "./ProductTable";

function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="container">
      <Search
        filterText={filterText}
        isChecked={isChecked}
        setFilterText={setFilterText}
        setIsChecked={setIsChecked}
      />
      <ProductTable filterText={filterText} isChecked={isChecked} />
    </div>
  );
}

export default FilterableProductTable;
