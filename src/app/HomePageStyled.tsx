"use client";
import { styled } from "@mui/material";

const HomePageStyled = styled("section")`
  background-color: #fff;
  height: calc(100vh - 90px);
  position: relative;
  width: 100vw;
  left: -2rem;
  .videogames {
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    @media (min-width: 383px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-template-rows: auto;
      box-sizing: border-box;
    }
    &__card {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      @media (min-width: 393px) {
        align-self: flex-start;
      }
      img {
        min-height: 350px;
        max-width: 100%;
        border-radius: 5%;
        object-fit: cover;
        @media (min-width: 596px) {
          min-height: 250px;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    height: calc(100vh - 100px);
    left: -4rem;
  }
`;

export default HomePageStyled;
