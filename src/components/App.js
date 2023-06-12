import React, { useState } from "react";
import Nav from "./Nav";
import Hoglist from "./HogList";
import hogs from "../porkers_data";
import HogSorter from "./HogSorter";

function App() {
  //add an ID and hidden keys to the hoglist
  const [hogArr, setHogArr] = useState([...hogs.map((hog, index) => Object.assign({}, hog, { hidden: false, id: index }))]);
  const [onlyShowGreased, setOnlyShowGreased] = useState(false);
  return (
    <div className="App">
      <Nav />
      <HogSorter hogArr={hogArr} setHogArr={setHogArr} onlyShowGreased={onlyShowGreased} setOnlyShowGreased={setOnlyShowGreased} />
      <Hoglist hogArr={hogArr} setHogArr={setHogArr} onlyShowGreased={onlyShowGreased} />
    </div>
  );
}

export default App;
