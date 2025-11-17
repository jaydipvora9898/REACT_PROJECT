import { Link, useNavigate, useParams } from "react-router-dom";
import useMovies from "../hooks/useMovies";

export default function ViewMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getMovieById, deleteMovie } = useMovies();
  const movie = getMovieById(id);

  if (!movie) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Movie not found</h1>
        <Link to="/" className="text-indigo-400 hover:underline">Go Home</Link>
      </div>
    );
  }

  function handleDelete() {
    deleteMovie(id);
    navigate("/");
  }

  return (
    <article className="space-y-6 animate-slideUp">
      <header className="flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-60 aspect-[3/4] bg-slate-700 rounded-lg overflow-hidden border border-slate-700">
          {movie.posterUrl ? (
            <img src={movie.posterUrl} alt={movie.title} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full grid place-items-center text-slate-300">No Poster</div>
          )}
        </div>
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-slate-300">
            {movie.genre ? `${movie.genre} • ` : ""}
            {movie.year || ""}
          </p>
          {movie.rating != null && (
            <p className="text-slate-200">⭐ Rating: {movie.rating}</p>
          )}
          <div className="flex gap-2 pt-2">
            <Link
              to={`/edit/${movie.id}`}
              className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="text-white bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-md transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </header>
      {movie.description && (
        <section className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
          <p className="text-slate-200">{movie.description}</p>
        </section>
      )}
    </article>
  );
}