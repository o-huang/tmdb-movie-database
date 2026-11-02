import type { Movie } from "../types/movie";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const PLACEHOLDER_IMAGE_URL =
  "https://via.placeholder.com/500x750?text=No+Poster";

export type MovieCardProps = {
  movie: Movie;
};

export function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : PLACEHOLDER_IMAGE_URL;

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden transition hover:-translate-y-2">
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full aspect-[2/3] object-cover"
      />
      <div className="p-3">
        <h3 className="font-bold truncate">{movie.title}</h3>
        <p className="text-yellow-400">⭐ {movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
}