import css from "./CastList.module.css";
import { BsFileEarmarkPerson } from "react-icons/bs";

export default function CastList({ info }) {
  const photoPath = info.profile_path
    ? `https://image.tmdb.org/t/p/w500/${info.profile_path}`
    : null;
  return (
    <div className={css.cardWrap}>
      {photoPath ? (
        <img src={photoPath} alt={`${info.name}'s photo`} className={css.img} />
      ) : (
        <BsFileEarmarkPerson
          title="Placeholder icon for missing profile photo"
          className={css.placeholderIcon}
        />
      )}
      <ul>
        <li className={css.name}>{info.name}</li>
        <li>{`Character: ${info.character}`}</li>
      </ul>
    </div>
  );
}
