import React, { useState } from "react";

function HogSorter({ hogArr, setHogArr, onlyShowGreased, setOnlyShowGreased }) {
  const [sortAscending, setSortAscending] = useState(true);
  function sortHogs() {
    if (sortAscending) {
      setHogArr([...hogArr.toSorted((a, b) => parseFloat(a.weight) - parseFloat(b.weight))]);
      setSortAscending(false);
    } else {
      setHogArr([...hogArr.toSorted((a, b) => parseFloat(b.weight) - parseFloat(a.weight))]);
      setSortAscending(true);
    }
  }
  function revealHogs() {
    setHogArr([...hogArr.map((hog) => Object.assign({}, hog, { hidden: false }))]);
  }
  function handleGreaseFilter() {
    setOnlyShowGreased(onlyShowGreased ? false : true);
  }
  return (
    <div style={{ padding: "1rem", margin: ".5rem" }}>
      <button onClick={() => revealHogs()}>Reveal hidden hogs</button>
      <button onClick={handleGreaseFilter}>{onlyShowGreased ? "Show all unhidden hogs" : "Only show greased hogs"}</button>
      <button onClick={sortHogs}>Sort by weight {sortAscending ? "ascending" : "descending"}</button>
    </div>
  );
}

export default HogSorter;
