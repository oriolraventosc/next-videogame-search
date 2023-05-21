"use client";
import Link from "next/link";
import colors from "../styles/colors";
import GlobalStyles from "../styles/globalStyles";
import mainTheme from "@/styles/mainTheme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "@mui/material";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const links = [
  {
    label: "Home",
    route: "/",
  },
  { label: "Videogame", route: "/videogame" },
];

export const metadata = {
  title: "Game4U",
  description: "Search between millions of videogames",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={mainTheme}>
      <StyledThemeProvider theme={colors}>
        <GlobalStyles />
        <html lang="en">
          <head>
            <link rel="shortcut icon" href="/favicon/favicon.png" />
          </head>
          <body className={roboto.className}>
            <header>
              <nav>
                <ul>
                  {links.map(({ label, route }) => (
                    <li key={route}>
                      <Link href={route}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </header>
            <main>{children}</main>
          </body>
        </html>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}
