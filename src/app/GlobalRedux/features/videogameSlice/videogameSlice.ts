import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Videogame } from "../../../../types/types";

interface VideogameState {
  videogamesList: Videogame[];
  videogameDetail: Videogame;
  page: number;
}

const videogameInitialState: VideogameState = {
  page: 1,
  videogamesList: [],
  videogameDetail: {
    name: "",
    background_image: "",
    description: "",
    rating: 0,
    released: "",
    website: "",
    platforms: [],
  },
};

const videogameSlicer = createSlice({
  name: "videogame",
  initialState: videogameInitialState,
  reducers: {
    loadVideogames: (initialState, action: PayloadAction<Videogame[]>) => ({
      ...initialState,
      videogamesList: [...action.payload],
    }),
  },
});

export const videogameReducer = videogameSlicer.reducer;

export const { loadVideogames: loadVidegamesActionCreator } =
  videogameSlicer.actions;
