import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const { movies, deleteMovie } = useMovies();
  const [q, setQ] = useState("");
  const PAGE_SIZE = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [genre, setGenre] = useState("");
  const [ratingMin, setRatingMin] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sortBy, setSortBy] = useState("recent"); 
  const [sortDir, setSortDir] = useState("desc"); 

  const genres = useMemo(() => {
    const set = new Set();
    movies.forEach((m) => {
      if (m.genre) set.add(m.genre);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [movies]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    let list = movies;

    // Searching
    if (query) {
      list = list.filter((m) =>
        [m.title, m.genre]
          .filter(Boolean)
          .some((f) => f.toLowerCase().includes(query))
      );
    }

    // Filtering
    if (genre) {
      list = list.filter((m) => m.genre === genre);
    }
    const rMin = ratingMin !== "" ? Number(ratingMin) : undefined;
    if (rMin !== undefined) {
      list = list.filter((m) => m.rating != null ? Number(m.rating) >= rMin : false);
    }

    // Price range filtering
    const pMin = priceMin !== "" ? Number(priceMin) : undefined;
    const pMax = priceMax !== "" ? Number(priceMax) : undefined;
    if (pMin !== undefined) {
      list = list.filter((m) => m.price != null ? Number(m.price) >= pMin : false);
    }
    if (pMax !== undefined) {
      list = list.filter((m) => m.price != null ? Number(m.price) <= pMax : false);
    }

    // Sorting
    const dir = sortDir === "asc" ? 1 : -1;
    list = [...list].sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title) * dir;
        case "year": {
          const av = typeof a.year === "number" ? a.year : -Infinity;
          const bv = typeof b.year === "number" ? b.year : -Infinity;
          return (av - bv) * dir;
        }
        case "rating": {
          const av = a.rating != null ? Number(a.rating) : -Infinity;
          const bv = b.rating != null ? Number(b.rating) : -Infinity;
          return (av - bv) * dir;
        }
        case "recent":
        default:
          // Assume newer added items are at the front; keep current order for desc, reverse for asc
          return dir === -1 ? 0 : -1; // cheap heuristic; asc reverses order
      }
    });

    if (sortBy === "recent" && sortDir === "asc") {
      list.reverse();
    }

    return list;
  }, [q, movies, genre, ratingMin, priceMin, priceMax, sortBy, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  // reset page on search
  useEffect(() => {
    setCurrentPage(1);
  }, [q, genre, ratingMin, priceMin, priceMax, sortBy, sortDir]);

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

      {/* Filters & Sorting */}
      <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">Genre</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
          >
            <option value="">All</option>
            {genres.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">Min Rating</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            placeholder="e.g., 7.5"
            value={ratingMin}
            onChange={(e) => setRatingMin(e.target.value)}
            className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">Price Range</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
            />
            <span className="text-slate-400">to</span>
            <input
              type="number"
              placeholder="Max"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">Sort</label>
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
            >
              <option value="recent">Recently Added</option>
              <option value="title">Title</option>
              <option value="year">Year</option>
              <option value="rating">Rating</option>
            </select>
            <select
              value={sortDir}
              onChange={(e) => setSortDir(e.target.value)}
              className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
            >
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>
        </div>
      </section>

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
