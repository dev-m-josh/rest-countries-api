import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import data from "./data.json";
import "./App.css";

export default function Countries({goToNextStep, setSelectedCountry}) {
  // State to manage filtering
  const [filters, setFilters] = useState({
    region: "", // filter by region
    search: "", // search query
  });

  // Handler function to update the filter state when a user selects a filter option
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    // Update the specific filter
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value, // update the correct filter
    }));
  };

  // Filtering countries based on both region and search query
  const filteredCountries = data.filter((country) => {
    const matchesRegion = filters.region
      ? country.region.toLowerCase() === filters.region.toLowerCase()
      : true;
    const matchesSearch = country.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    
    return matchesRegion && matchesSearch;
  });

  //Handle country click and pass selected country
  const handleClick = (country) =>{
    setSelectedCountry(country);
    goToNextStep();
  }


  return (
    <>
      <div className="search">
        <div className="search-input">
          <p>
            <FontAwesomeIcon icon={faSearch} />
          </p>
          <input
            type="search"
            placeholder="Search for a country..."
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>
        <select
          className="region-select"
          name="region"
          value={filters.region}
          onChange={handleFilterChange}
        >
          <option value="">Select a Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="countries">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <div className="country" key={country.name}  onClick={() => handleClick(country)}>
              <img src={country.flags.png} alt={country.name} />
              <div className="country-info">
                <h3>{country.name}</h3>
                <p>
                  <span>Population: </span>
                  {country.population}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No countries found matching your search criteria.</p>
        )}
      </div>
    </>
  );
}
