import { useState } from "react";
import "../styles/searchBar.scss";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleChange = (event) => {
    setHasError("");
    setTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setHasError(false);

    if (term) {
      onSubmit(term);
    } else {
      setHasError(true);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        value={term}
        onChange={handleChange}
        className="search"
        placeholder="Search for any word…"
      />
      {hasError && <p>Whoops, can't be empty...</p>}
    </form>
  );
}

export default SearchBar;
