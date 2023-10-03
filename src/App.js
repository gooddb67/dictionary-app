import { useState, useEffect } from "react";

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
  const [theme, setTheme] = useState("light");

  const handleSubmit = async (term) => {
    const result = await searchWord(term);

    if (result.data.message) {
      setHasErrorMessage(result.data.message);
    } else {
      setApiResult(result.data);
      setHasErrorMessage("");
    }
  };

  useEffect(() => {
    document.body.classList.toggle(theme);
    return () => document.body.classList.remove(theme);
  }, [theme]);

  return (
    <div className="app-container bg-yellow-100 dark:bg-black">
      <div className="flex">
        <Dropdown options={dropdownOptions} />
        <Toggle isChecked={theme} toggleTheme={setTheme} />
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
