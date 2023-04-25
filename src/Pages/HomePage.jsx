import React, { useState } from "react";
import FilterCountry from "../Components/Headings/FilterCountry";
import allCountries from "../mydata.json";

const HomePage = (props) => {
  const [countries, setCountries] = useState(allCountries);

  return (
    <React.Fragment>
      <FilterCountry countries={countries} setCountries={setCountries} />
    </React.Fragment>
  );
};

export default HomePage;
