import "./App.css";
import SearchBar from "./components/SearchBar";
import searchWord from "./api";

const handleSubmit = async (term) => {
  const result = await searchWord(term);

  console.log(result.data);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary</header>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
