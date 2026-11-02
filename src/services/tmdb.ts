import type { MovieResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY || "62df2cd3a4881de6558bc68cd67cca20";

export async function fetchMovies(
  year: string = "2026",
): Promise<MovieResponse> {
  if (!API_KEY) {
    throw new Error(
      "TMDB API key is not defined. Please set the VITE_TMDB_API_KEY environment variable.",
    );
  }

  const url = new URL(BASE_URL);
  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("primary_release_year", year);
  url.searchParams.set('sort_by', 'popularity.desc');
  url.searchParams.set("page", "1")

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(
      `Failed to fetch movies: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}
