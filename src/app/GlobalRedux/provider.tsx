"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import colors from "../../styles/colors";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "@mui/material";

interface Props {
  children: any;
}

export function Providers({ children }: Props) {
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
