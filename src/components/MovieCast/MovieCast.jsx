import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfo } from "../../fetchdata";
import CastList from "../CastList/CastList";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
      try {
        setLoading(true);
        // setError(false);
        setError(null);
        const data = await getInfo(movieId, "credits");
        if (data && data.cast) {
          setMovieCast(data.cast);
        } else {
          setError("No cast information available.");
        }
      } catch (error) {
        setError(error.message || "Failed to fetch cast information.");
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {error && <b>Sorry, something went wrong. Please, try again!</b>}
      {loading && <b>Loading...</b>}

      <ul className={css.list}>
        {movieCast.length > 0 ? (
          movieCast.map((actor) => (
            <li className={css.item} key={actor.id}>
              {<CastList info={actor} />}
            </li>
          ))
        ) : (
          <p>Sorry, but we don`t have information about the cast☹️</p>
        )}
      </ul>
    </div>
  );
}
