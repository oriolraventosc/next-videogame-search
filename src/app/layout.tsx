"use client";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { Providers } from "./GlobalRedux/provider";

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
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
