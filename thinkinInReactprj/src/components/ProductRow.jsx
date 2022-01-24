import React from "react";
import dataItem from "../data";

function ProductRow(props) {
  const product_name = props.product.stocked ? (
    props.product.name
  ) : (
    <span style={{ color: "red" }}>{props.product.name}</span>
  );

  return (
    <tr>
      {}
      <td>{product_name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}

export default ProductRow;
