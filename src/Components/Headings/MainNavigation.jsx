import { useState } from "react";
import IconBxMoon from "../../assets/Moon";
import IconSunFill from "../../assets/Sun";
import classes from "./MainNavigation.module.css";
/** @jsxImportSource theme-ui */
import { useColorMode } from "theme-ui";
const MainNavigation = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [state, setState] = useState("light");

  return (
    <nav className={classes["nav-container"]}>
      <div className={classes["nav-wrapper"]}>
        <h1>Where in the World?</h1>

        <button
          onClick={() => {
            setColorMode(colorMode === "light" ? "dark" : "light");
            setState(colorMode === "light" ? "dark" : "light");
          }}
          sx={{
            color: "text",
          }}
        >
          {state === "light" ? <IconBxMoon /> : <IconSunFill />}
          {state === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default MainNavigation;
