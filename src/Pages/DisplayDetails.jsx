import React, { useEffect, useState, Fragment } from "react";

import classes from "./DisplayDetails.module.css";
import allCountries from "../mydata.json";
import IconBxArrowBack from "../assets/Arrow";
import { useParams, Link } from "react-router-dom";
/** @jsxImportSource theme-ui */
const DisplayDetails = () => {
  const { countryId } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);
  const fetchDataDetails = (name) => {
    setCountryDetails(
      allCountries.filter((country) => country.name.common === name)
    );
  };
  useEffect(() => {
    fetchDataDetails(countryId);
  }, [countryId]);

  const desCountryDetails = countryDetails[0];
  const borderCountries = allCountries.filter((country) =>
    desCountryDetails?.borders?.some((bor) => country.cca3 === bor)
  );
  return (
    <Fragment>
      <Link
        to="/"
        className={classes["back-btn"]}
        sx={{
          color: "inverseText", // picks up value from `theme.colors.primary`
          background: "background",
        }}
      >
        <IconBxArrowBack />
        Back
      </Link>

      {countryDetails.length > 0 && (
        <div className={classes["details-wrapper"]}>
          <div>
            <img src={desCountryDetails.flags.png} alt="" />
          </div>
          <div>
            <h1>{desCountryDetails?.name?.common}</h1>
            <div className={classes["details-inner-content"]}>
              <div>
                <p>
                  <span>Native Name: </span>
                  {
                    desCountryDetails.name.nativeName[
                      Object.keys(desCountryDetails.name.nativeName)[0]
                    ].official
                  }
                </p>
                <p>
                  <span> Population:</span> {desCountryDetails.population}
                </p>
                <p>
                  <span> Region: </span>
                  {desCountryDetails.region}
                </p>
                <p>
                  <span> Sub Region: </span>
                  {desCountryDetails.subregion}
                </p>
                <p>
                  <span> Capital: </span>
                  {desCountryDetails.capital}
                </p>
              </div>
              <div>
                <p>
                  <span> Top Level Domain: </span>
                  {desCountryDetails.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {
                    desCountryDetails.currencies[
                      Object.keys(desCountryDetails.currencies)[0]
                    ].name
                  }

                  <strong className={classes["symbol"]}>
                    {
                      desCountryDetails.currencies[
                        Object.keys(desCountryDetails.currencies)[0]
                      ].symbol
                    }
                  </strong>
                </p>
                <div className={classes["languages-wrapper"]}>
                  <strong>Languages: </strong>
                  {Object.keys(desCountryDetails.languages).map((lang, i) => (
                    <span key={lang + i}>
                      {(i ? " , " : "") +
                        desCountryDetails.languages[
                          Object.keys(desCountryDetails.languages)[i]
                        ]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <span>Border Countries</span>
              <div className={classes["border-wrapper"]}>
                {borderCountries.length ? (
                  borderCountries.map((border, i) => (
                    <button
                      key={border + i}
                      onClick={() => fetchDataDetails(border.name.common)}
                      sx={{
                        color: "text", // picks up value from `theme.colors.primary`
                        background: "background",
                      }}
                    >
                      {border.name.common}
                    </button>
                  ))
                ) : (
                  <p>{desCountryDetails.name.common} has no border</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default DisplayDetails;
