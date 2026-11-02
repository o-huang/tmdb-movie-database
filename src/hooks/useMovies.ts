import {useQuery} from "@tanstack/react-query";
import type {Movie} from "../types/movie";
import {fetchMovies} from "../services/tmdb";

export function useMovies(year: string = "2026") {
  return useQuery<Movie[], Error>({
    queryKey: ["movies", year],
    queryFn: async () =>{
        const data  = await fetchMovies(year);
        return data.results;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}