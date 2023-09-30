import { useState } from "react";

import SearchBar from "./components/SearchBar";
import searchWord from "./api";
import WordDisplay from "./components/WordDisplay";
import ErrorDisplay from "./components/ErrorDisplay";
import Toggle from "./components/Toggle";
import Dropdown from "./components/Dropdown";

import "./App.scss";

const dropdownOptions = [
  { label: "Sans Serif", value: "sans serif" },
  { label: "serif", value: "serif" },
  { label: "mono", value: "mono" },
];

function App() {
  const [apiResult, setApiResult] = useState([]);
  const [errorMessage, setHasErrorMessage] = useState("");

  const handleSubmit = async (term) => {
    const result = await searchWord(term);

    if (result.data.message) {
      setHasErrorMessage(result.data.message);
    } else {
      setApiResult(result.data);
      setHasErrorMessage("");
    }
  };

  return (
    <div className="app-container">
      <div>
        <Dropdown options={dropdownOptions} />
        <Toggle />
      </div>
      <SearchBar onSubmit={handleSubmit} />
      {errorMessage ? (
        <ErrorDisplay message={errorMessage} />
      ) : (
        <WordDisplay apiResult={apiResult} />
      )}
    </div>
  );
}

export default App;
