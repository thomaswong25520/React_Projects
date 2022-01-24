import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import dataItem from "../data";

function ProductTable(props) {
  const rows = [];
  let lastCategory = null;

  dataItem.forEach((data) => {
    if (
      data.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1
    ) {
      return;
    }
    if (props.isChecked && !data.stocked) {
      return;
    }
    if (data.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={data.category} />);
    }
    rows.push(<ProductRow product={data} />);
    lastCategory = data.category;
  });

  function handleFilter() {}

  return (
    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default ProductTable;
