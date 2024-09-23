import css from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovie } from "../../fetchdata";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
// import clsx from "clsx";

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [genres, setGenres] = useState([]);
  const [score, setScore] = useState(0);
  const [posterPath, setPosterPath] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovie(movieId);
        setMovieData(data);
        const movieGen = data.genres.map((genre) => genre.name).join(", ");
        setGenres(movieGen);
        const userScore = Math.floor(data.vote_average);
        setScore(`User score: ${userScore}%`);
        setPosterPath(data.poster_path);
      } catch (err) {
        setError(err.message);
        // setError("Failed to load movie data");
      } finally {
        setLoading(false);
      }
    }
    fetchMovieData();
  }, [movieId]);
  if (error) {
    return <NotFoundPage />;
  }
  if (loading) {
    return <b>Loading...</b>;
  }

  // function linksActive(props) {
  //   return clsx(css.link, props.isActive && css.isActive);
  // }
  // console.log(posterPath);

  return (
    movieData && (
      <div className={css.wrap}>
        <Link className={css.goBackLink} to={backLinkRef.current ?? "/"}>
          Go back
        </Link>
        <div className={css.movieInfoWrap}>
          <img
            src={
              posterPath
                ? `https://image.tmdb.org/t/p/w300/${posterPath}`
                : "/path-to-placeholder.jpg"
            }
            // src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
            alt="movie_poster"
          />
          <ul>
            <li>
              <h2>
                {movieData.original_title}{" "}
                <span>{`(${Number.parseInt(movieData.release_date)})`}</span>
              </h2>
            </li>
            <li>
              <p>{score}</p>
            </li>
            <li>
              <h3>Overwiew</h3>
            </li>
            <li>
              <p>{movieData.overview}</p>
            </li>
            <li>
              <h4>Geners</h4>
            </li>
            <li>
              <p>{genres}</p>
            </li>
          </ul>
        </div>
        <div className={css.addWrap}>
          <p>Additional information:</p>
          <ul className={css.addList}>
            <NavLink
              className={({ isActive }) => (isActive ? css.isActive : css.link)}
              to="cast"
            >
              Cast
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? css.isActive : css.link)}
              to="reviews"
            >
              Reviews
            </NavLink>
          </ul>
          <Outlet />
        </div>
      </div>
    )
  );
}
