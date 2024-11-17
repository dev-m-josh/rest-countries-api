import React from "react";

export default function Country({ goToPreviousStep, selectedCountry }) {

  return (
    <div>
      <button onClick={goToPreviousStep}>Back</button>
      <div>
      <img src={selectedCountry.flags.png} alt={selectedCountry.name} />
      </div>
    </div>
  );
}
