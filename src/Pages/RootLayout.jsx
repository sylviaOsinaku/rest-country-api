import React from "react";
import MainNavigation from "../Components/Headings/MainNavigation";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import Theme from "../Theme/Theme";
const RootLayout = () => {
  return (
    <ThemeProvider theme={Theme}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default RootLayout;
