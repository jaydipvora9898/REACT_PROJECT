import { useEffect, useState } from "react";

const STORAGE_KEY = "movies";

export default function useMovies() {
  const [movies, setMovies] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  }, [movies]);

  function addMovie(movie) {
    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : String(Date.now());
    const newMovie = { id, ...movie };
    setMovies((prev) => [newMovie, ...prev]);
    return id;
  }

  function updateMovie(id, updates) {
    setMovies((prev) => prev.map((m) => (m.id === id ? { ...m, ...updates } : m)));
  }

  function deleteMovie(id) {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }

  function getMovieById(id) {
    return movies.find((m) => m.id === id);
  }

  return { movies, addMovie, updateMovie, deleteMovie, getMovieById };
}