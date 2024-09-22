import { Link, useLocation } from "react-router-dom";

export default function MovieList({ allMovies }) {
  const location = useLocation();

  return (
    <ul>
      {allMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.Id}`} state={location}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
