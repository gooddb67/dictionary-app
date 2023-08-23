import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="search"
      />
    </form>
  );
}

export default SearchBar;
