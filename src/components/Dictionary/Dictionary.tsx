import React, { useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";

import WordInfo from "../WordInfo";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

import "./Dictionary.css";

const Dictionary: React.FC = () => {
  const searchQuery = useRef("");
  const [result, setResult] = useState({});

  const handleResponse = (response: AxiosResponse) => {
    setResult(response.data[0]);
    console.log(response.data[0].phonetics);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const apiURL =
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchQuery.current;
    axios.get(apiURL).then(handleResponse);
  };

  const onSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchQuery.current = event.target.value;
  };

  return (
    <div className="Dictionary m-5">
      <section>
        <h1 className="fw-bold fs-2 mb-3">What word do you want to look up?</h1>
        <form onSubmit={handleSearch}>
          <div className="input-group">
            <input
              type="search"
              onChange={onSearchQueryChange}
              className="form-control"
            />
            <button type="submit" className="btn">
              <SearchIcon />
            </button>
          </div>
        </form>
        <div className="suggestions">i.e. paris, wine, yoga, coding</div>
      </section>
      <WordInfo info={result} />
    </div>
  );
};

export default Dictionary;
