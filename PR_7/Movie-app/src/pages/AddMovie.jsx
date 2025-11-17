import { useNavigate } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import MovieForm from "../components/MovieForm";

export default function AddMovie() {
  const navigate = useNavigate();
  const { addMovie } = useMovies();

  function handleSubmit(payload) {
    const movie = addMovie(payload);
    navigate(`/${movie.id}`);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Add Movie</h1>
      <MovieForm onSubmit={handleSubmit} submitLabel="Add Movie" />
    </div>
  );
}