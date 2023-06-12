import React from "react";
import HogCard from "./HogCard";
function Hoglist({ hogArr, setHogArr, onlyShowGreased }) {
  function handleDelete(hogID) {
    setHogArr([...hogArr.filter((hog) => hog.id !== hogID)]);
  }
  function handleHide(hog) {
    const updatedPigArr = [
      ...hogArr.map((newHog) => {
        const updateHidden = hog.id === newHog.id ? true : newHog.hidden;
        return Object.assign({}, newHog, { hidden: updateHidden });
      }),
    ];
    setHogArr(updatedPigArr);
  }
  return (
    <div className="ui grid container">
      {hogArr
        .filter((hog) => !hog.hidden)
        .filter((hog) => {
          if (!onlyShowGreased) return true;
          else return hog.greased;
        })
        .map((hog) => (
          <HogCard key={hog.id} hog={hog} handleDelete={handleDelete} handleHide={handleHide} />
        ))}
    </div>
  );
}

export default Hoglist;
