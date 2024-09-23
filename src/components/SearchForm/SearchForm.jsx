import css from "./SearchForm.module.css";

export default function SearchForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.movieName.value.trim();
    if (query === "") {
      alert("Please enter a movie name.");
      return;
    }
    onSubmit(query);
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="movieName"
        aria-label="Search movies"
        placeholder="Enter movie name"
      />
      <button type="submit" aria-label="Search for a movie">
        Search
      </button>
    </form>
  );
}
