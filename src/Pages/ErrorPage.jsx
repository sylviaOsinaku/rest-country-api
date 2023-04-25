import { useRouteError, Link } from "react-router-dom";
import errorImage from "../assets/error.svg";
import classes from "./ErrorPage.module.css";
import { ThemeProvider } from "theme-ui";
import Theme from "../Theme/Theme";
import MainNavigation from "../Components/Headings/MainNavigation";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <ThemeProvider>
      <MainNavigation theme={Theme} />
      <div id="error-page" className={classes["error-container"]}>
        <img src={errorImage} alt="An error mesage" />
        <div>
          <p>Page not found</p>
          <h1>Oops! Error 404</h1>
          <p>
            Maybe <span>tesRobot</span> has screwed out this page
          </p>
          {/* <p>
          <i>{error.statusText || error.message}</i>
        </p> */}
          <div>
            <Link to="/">Back to homepage</Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ErrorPage;
