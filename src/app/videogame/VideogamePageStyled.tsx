"use client";
import { styled } from "@mui/material";

const VideogamePageStyled = styled("div")`
  background-color: #fff;
  height: calc(100vh - 90px);
  position: relative;
  width: 100vw;
  left: -2rem;
  @media (min-width: 1024px) {
    height: calc(100vh - 100px);
    left: -4rem;
  }
`;

export default VideogamePageStyled;
