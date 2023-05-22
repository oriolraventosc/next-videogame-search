"use client";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { Providers } from "./GlobalRedux/provider";
import Header from "../components/Header/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.png" />
        <title>Game4U</title>
        <meta
          name="description"
          content="Search between millions of videogames"
        />
      </head>
      <body className={roboto.className}>
        <Header />
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
