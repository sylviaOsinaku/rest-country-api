import React from "react";
import { Link } from "react-router-dom";
import classes from "./DisplayCountries.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
/** @jsxImportSource theme-ui */
const DisplayCountry = ({ countries }) => {
  return (
    <div>
      <ul className={classes["country-container"]}>
        {countries.length > 0 &&
          countries.map((country) => {
            return (
              <li
                key={country.name.common}
                className={classes["country-wrapper"]}
                sx={{
                  color: "text", // picks up value from `theme.colors.primary`
                  background: "primary",
                }}
              >
                <Link to={`${country.name.common}`}>
                  <LazyLoadImage
                    src={country.flags.png}
                    alt="Image Alt"
                    effect="blur"
                    width={`${100}%`}
                    height={`${130}px`}
                  />
                </Link>
                <div>
                  <h1>{country.name.common}</h1>
                  <p>
                    <span>Population:</span> {country.population}
                  </p>
                  <p>
                    <span>Region:</span> {country.region}
                  </p>
                  <p>
                    <span>Capital:</span> {country.capital}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default DisplayCountry;
