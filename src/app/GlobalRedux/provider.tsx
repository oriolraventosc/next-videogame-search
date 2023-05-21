"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import colors from "../../styles/colors";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "@mui/material";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <StyledThemeProvider theme={colors}>
          <GlobalStyles />
          {children}
        </StyledThemeProvider>
      </ThemeProvider>
    </Provider>
  );
}
