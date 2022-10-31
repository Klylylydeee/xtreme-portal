// React
import React from "react";
import { Provider } from "react-redux";
import store from "../store/redux";

// NextJS
import type { AppProps } from "next/app";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout: React.ComponentType;
  };
};

// Material UI
import { ThemeProvider, CssBaseline } from "@mui/material";
import lightTheme from "../styles/lightTheme";

const MyApp = ({ Component, pageProps }: ComponentWithPageLayout) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
