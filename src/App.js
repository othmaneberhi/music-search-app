import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
function App() {
  const [results, setResults] = useState({
    albums: [],
    artists: [],
    tracks: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (searchQuery, results) => {
    setResults(results);
    setSearchQuery(searchQuery);
  };
  const isResultsEmpty =
    results.albums.length === 0 &&
    results.artists.length === 0 &&
    results.tracks.length === 0;
  return (
    <div className="container mt-5">
      <div
        className={
          isResultsEmpty
            ? "center-vertically row d-flex flex-column align-items-center"
            : "row align-items-center"
        }
      >
        <div className={isResultsEmpty?"col-6 d-flex align-items-center justify-content-center":"col-6 d-flex align-items-center"}>
          <img
            src="https://th.bing.com/th/id/OIP.2Iub1VhQvOuIDgPHJSeiOQHaHa?pid=ImgDet&rs=1"
            width={150}
          />
          <h1 className="fw-bolder">
            Spotify <span className="fs-3 text-muted">search</span>
          </h1>
        </div>
        <div className="col-6">
          <SearchForm setResults={handleSearch} />
        </div>
      </div>
      {isResultsEmpty ? null : (
        <div className="my-3">
          <SearchResult results={results} searchQuery={searchQuery} />
        </div>
      )}
    </div>
  );
}

export default App;
