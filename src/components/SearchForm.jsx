import React, {useState } from "react";
const SearchForm = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '02ee0e7cdfmsh5a23d9fa29c1a97p1d62cajsnc40b3fdad9df',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

  async function fetchData(searchQuery) {
    try {
      const url = `https://spotify23.p.rapidapi.com/search/?q=${searchQuery}&type=multi&offset=0&limit=20&numberOfTopResults=5`;
        const response = await fetch(url, options);
        const result = await response.json();
        return result || [];
    } catch (error) {
        console.error(error);
    }
  }

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // useEffect(() => {
  //   fetchData(searchQuery)
  // },[searchQuery]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await fetchData(searchQuery);
    props.setResults(searchQuery,result)
  }

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Song, Album, Artist ..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button
            type="submit"
            className="btn btn-dark"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
