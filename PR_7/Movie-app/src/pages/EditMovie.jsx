import { useNavigate, useParams, Link } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import MovieForm from "../components/MovieForm";

export default function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getMovieById, updateMovie } = useMovies();
  const movie = getMovieById(id);

  function handleSubmit(payload) {
    updateMovie(id, payload);
    navigate(`/${id}`);
  }

  if (!movie) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Movie not found</h1>
        <Link to="/" className="text-indigo-400 hover:underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Edit Movie</h1>
      <MovieForm initialData={movie} onSubmit={handleSubmit} submitLabel="Save Changes" />
    </div>
  );
}