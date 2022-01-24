import React from "react";

// export default function Search() {
//   return (
//     <div className="search">
//       <input type="text" placeholder="Search..." />
//       <div className="filterItem">
//         <input id="filter-item" type="checkbox" />
//         <label for="filter-item">Only show products in stock</label>
//       </div>
//     </div>
//   );
// }

export default function Search(props) {
  function handleChange(event) {
    const typedText = event.target.value;
    props.setFilterText(typedText);
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={handleChange}
      />

      <label className="filterItem" for="filter-item">
        <input
          id="filter-item"
          type="checkbox"
          checked={props.isChecked}
          onChange={(e) => props.setIsChecked(e.target.checked)}
        />
        Only show products in stock
      </label>
    </div>
  );
}
