import { Link } from "react-router-dom";

export default function MovieCard({ movie, onDelete }) {
  const poster = movie.posterUrl || "";
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700 backdrop-blur-sm shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:border-indigo-500">
      {/* shimmer beam */}
      <span className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-none group-hover:animate-shine" />
      <div className="aspect-3/4 w-full bg-slate-700">
        {poster ? (
          <img
            src={poster}
            alt={movie.title}
            className="w-full object-inherit transition-transform duration-500 group-hover:scale-105 animate-float"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-slate-300">
            No Poster
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold tracking-wide">{movie.title}</h3>
          {movie.rating != null && (
            <span className="px-2 py-0.5 rounded-md bg-indigo-600/90 text-white text-sm shadow-sm">
              ⭐ {movie.rating}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-300 line-clamp-2">
          {movie.description}
        </p>
        <div className="flex items-center gap-2 pt-2">
          <Link
            to={`/movie/${movie.id}`}
            className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm transition-all"
          >
            View
          </Link>
          <Link
            to={`/edit/${movie.id}`}
            className="text-indigo-600 bg-white/90 hover:bg-white px-3 py-1.5 rounded-md text-sm transition-all border border-indigo-200"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(movie.id)}
            className="ml-auto text-white bg-rose-600 hover:bg-rose-700 px-3 py-1.5 rounded-md text-sm transition-all"
          >
            Delete
          </button>
        </div>
      </div>
      {/* soft gradient veil on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </div>
  );
}
