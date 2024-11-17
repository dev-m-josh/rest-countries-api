import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

export default function Country({ goToPreviousStep, selectedCountry }) {
  return (
    <div className="country-detail">
      <button onClick={goToPreviousStep}>
        <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faArrowLeft} />
        Back
      </button>
      <div className="bottom">
        <img src={selectedCountry.flags.png} alt={selectedCountry.name} />
        <div className="details">
          <div className="top-details">
            <h1>{selectedCountry.name}</h1>
            <div className="more-info">
              <div className="basic-details">
                <p>
                  <span>Native Name: </span>
                  {selectedCountry.altSpellings[1]}
                </p>
                <p>
                  <span>Population: </span>
                  {selectedCountry.population}
                </p>
                <p>
                  <span>Region: </span>
                  {selectedCountry.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {selectedCountry.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {selectedCountry.capital}
                </p>
              </div>
              <div className="aditional-details">
                <p>
                  <span>Top Level Domain: </span>
                  {selectedCountry.topLevelDomain}
                </p>
                <p>
                  <span>Currencies: </span>
                  {selectedCountry.currencies.map((currency) => {
                    return currency.name;
                  })}
                </p>
                <p>
                  <span>Languages: </span>
                  {selectedCountry.languages
                    .map((language, index) => language.name)
                    .join(", ")}
                </p>
              </div>
            </div>
            <p className="borders">
              <span>Border Countries: </span>
              {selectedCountry.borders.map((border) =>{
                return (
                  <p>{border}</p>
                )
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
