/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import classes from "./FilterCountry.module.css";
import DisplayCountry from "../Countries/DisplayCountries";
const FilterCountry = (props) => {
  const [stateCountries, setStateCountries] = useState({
    searchTerm: "",
    countries: [],
  });
  useEffect(() => {
    setStateCountries({
      countries: props.countries,
    });
  }, [props.countries]);

  const fecthRegionHandler = (e) => {
    if (e.target.value === "FilterByRegion") {
      setStateCountries({
        countries: props.countries,
      });
    }
    setStateCountries({
      countries: props.countries.filter(
        (country) => country.region.toLowerCase() === e.target.value
      ),
    });
  };

  const filterCountryHandler = (e) => {
    const filteredData = props.countries.filter((country) => {
      if (e.target.value === "") return stateCountries.countries;
      return country.name.common
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase().trim());
    });
    setStateCountries({
      searchTerm: e.target.value,
      countries: filteredData,
    });
  };
  return (
    <React.Fragment>
      <div className={classes["filter-country-wrapper"]}>
        <div>
          <input
            sx={{
              color: "text", // picks up value from `theme.colors.primary`
              background: "background",
            }}
            type="search"
            name="Filter by Region"
            onChange={filterCountryHandler}
            placeholder="Search for a country..."
          />
        </div>
        <div>
          <select
            name="filter"
            id=""
            onChange={fecthRegionHandler}
            sx={{
              color: "text", // picks up value from `theme.colors.primary`
              background: "background",
            }}
          >
            <option value="FilterByRegion">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      {stateCountries.searchTerm?.length > 1 &&
        stateCountries.countries?.length === 0 && (
          <p className={classes["loading"]}>No country match your search</p>
        )}
      {stateCountries.countries?.length === 0 &&
        stateCountries.searchTerm?.length === 0 && (
          <p className={classes["loading"]}>Loading...</p>
        )}
      <DisplayCountry countries={stateCountries.countries} />
    </React.Fragment>
  );
};

export default FilterCountry;
