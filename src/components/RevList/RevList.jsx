import css from "./RevList.module.css";

export default function RevList({ info }) {
  return (
    <article>
      <h4 className={css.name}>{info.author}</h4>
      <p>{info.content}</p>
    </article>
  );
}
