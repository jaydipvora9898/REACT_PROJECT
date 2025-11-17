import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const { movies, deleteMovie } = useMovies();
  const [q, setQ] = useState("");
  const PAGE_SIZE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return movies;
    return movies.filter((m) =>
      [m.title, m.genre]
        .filter(Boolean)
        .some((f) => f.toLowerCase().includes(query))
    );
  }, [q, movies]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  // reset page on search
  useEffect(() => {
    setCurrentPage(1);
  }, [q]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold">Your Movies</h1>
        <div className="flex items-center gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by title or genre"
            className="w-64 rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
          />
          <Link
            to="/add"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            + Add Movie
          </Link>
        </div>
      </header>

      {filtered.length === 0 ? (
        <div className="grid place-items-center text-center py-16 bg-slate-800/40 rounded-xl border border-slate-700">
          <p className="text-slate-300 mb-4">No movies yet.</p>
          <Link
            to="/add"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-50 border border-indigo-200 transition"
          >
            Add your first movie
          </Link>
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pageItems.map((movie) => (
              <div key={movie.id} className="animate-fadeIn">
                <MovieCard movie={movie} onDelete={deleteMovie} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-md border border-slate-700 bg-slate-800 text-slate-200 disabled:opacity-50 hover:bg-slate-700 transition"
            >
              Prev
            </button>
            <span className="text-slate-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-md border border-slate-700 bg-slate-800 text-slate-200 disabled:opacity-50 hover:bg-slate-700 transition"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
