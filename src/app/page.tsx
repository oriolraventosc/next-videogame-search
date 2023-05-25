/* eslint-disable @next/next/no-img-element */
"use client";
import useVideogame from "@/hooks/useVideogame/useVideogame";
import HomePageStyled from "./HomePageStyled";
import { useEffect, useState } from "react";
import { useAppSelector } from "./GlobalRedux/hooks";
import { Typography, colors } from "@mui/material";

export default function Home() {
  const [platform] = useState(4);
  const page = useAppSelector((state) => state.videogameActions.page);
  const videogames = useAppSelector(
    (state) => state.videogameActions.videogamesList
  );
  const [currentPage] = useState(page);
  const { loadVidegames } = useVideogame();
  useEffect(() => {
    loadVidegames(20, platform, currentPage);
  }, [currentPage, loadVidegames, platform]);
  return (
    <HomePageStyled>
      <div className="videogames">
        {videogames.map((videogame, index) => (
          <article key={index} className="videogames__card">
            <img
              src={videogame.background_image}
              alt={videogame.name}
              width={"100%"}
              height={"100%"}
              className="videogames__card-image"
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "600",
                display: "inline",
                color: "#333237",
                textAlign: "center",
              }}
            >
              {videogame.name}
            </Typography>
          </article>
        ))}
      </div>
    </HomePageStyled>
  );
}
