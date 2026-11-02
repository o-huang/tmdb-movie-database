import { useMovies } from "./hooks/useMovies";
import { MovieCard } from "./components/MovieCard";

export default function App() {
  const { data: movies, isLoading, isError, error } = useMovies("2026");

  if (isLoading) return <p className="p-8 text-center">Loading movies...</p>;
  if (isError) return <p className="p-8 text-center text-red-400">Error: {error.message}</p>;

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Movie Discovery</h1>
          <p className="text-slate-400">Top movies released in 2026</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
      </div>
    </main>
  );
}