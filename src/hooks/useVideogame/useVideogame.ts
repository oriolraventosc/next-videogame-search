import { loadVidegamesActionCreator } from "@/app/GlobalRedux/features/videogameSlice/videogameSlice";
import { useAppDispatch } from "@/app/GlobalRedux/hooks";
import axios from "axios";
import { useCallback } from "react";

const useVideogame = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const dispatch = useAppDispatch();
  const loadVidegames = useCallback(
    async (pageSize: number, platform: number, page: number) => {
      const url = `${apiUrl}games?key=fef9627525964a6a88be0d88115a82bd&page_size=${pageSize}&platforms=${platform}&page=${page}`;
      try {
        const response = await axios.get(url);
        const apiResponse = response.data;
        dispatch(loadVidegamesActionCreator(apiResponse.results));
      } catch {}
    },
    [apiUrl, dispatch]
  );
  return { loadVidegames };
};

export default useVideogame;
