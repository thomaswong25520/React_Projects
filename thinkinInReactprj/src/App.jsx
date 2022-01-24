import React from "react";
import Search from "./components/Search";
import dataItem from "./data";
import FilterableProductTable from "./components/FilterableProductTable";
function App() {
  const dataList = dataItem;

  return (
    <div className="App">
      <FilterableProductTable />
      {console.log(dataList)}
    </div>
  );
}

export default App;
