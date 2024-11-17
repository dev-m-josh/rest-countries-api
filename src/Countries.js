import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import data from "./data.json";
import "./App.css";

export default function Countries() {
  //state to manage filtering
  const [filters, setFilters] = useState({
    region: "", //filter by region
  });

  const filteredRegion = data.filter((country) => {
    return filters.region
      ? country.region.toLowerCase() === filters.region.toLowerCase()
      : true;
  });

  // Handler function to update the filter state when a user selects a filter option
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    // Update the specific filter
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value, //update the correct filter
    }));
  };

  return (
    <>
      <div className="search">
        <div className="search-input">
          <p>
            <FontAwesomeIcon icon={faSearch} />
          </p>
          <input type="search" placeholder="Search for a country..." />
        </div>
        <select 
        className="region-select"
        name="region"
        value={filters.region}
        onChange={handleFilterChange}
        >
          <option value="">Filter by Regions</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="countries">
        {filteredRegion.map((country) => {
          return (
            <div className="country">
              <img src={country.flags.png} alt={country.name} />
              <div className="country-info">
                <h3>{country.name}</h3>
                <p>
                  <span>Population:</span>
                  {country.population}
                </p>
                <p>
                  <span>Population:</span>
                  {country.region}
                </p>
                <p>
                  <span>Population:</span>
                  {country.capital}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
