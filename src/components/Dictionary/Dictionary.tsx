import React, { useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";

import WordInfo from "../WordInfo";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

import "./Dictionary.css";

interface DictionaryProps {
  defaultWord: string;
}

const Dictionary: React.FC<DictionaryProps> = ({ defaultWord }) => {
  const searchQuery = useRef(defaultWord);
  const [result, setResult] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  const handleResponse = (response: AxiosResponse) => {
    setResult(response.data[0]);
  };

  const handleRejection = () => {
    setError(`Can't found '${searchQuery.current}'. Please try again!`);
  };

  const onSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchQuery.current = event.target.value;
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search();
  };

  const search = () => {
    const apiURL =
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchQuery.current;
    axios.get(apiURL).then(handleResponse).catch(handleRejection);
  };

  const load = () => {
    search();
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <div className="Dictionary m-5">
        <section>
          <h1 className="fw-bold fs-2 mb-3">
            What word do you want to look up?
          </h1>
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
            <div className="error">{error.length ? error : ""}</div>
          </form>
          <div className="suggestions">i.e. paris, wine, yoga, coding</div>
        </section>
        {Object.keys(result).length === 0 ? "" : <WordInfo info={result} />}
      </div>
    );
  } else {
    load();
    return null;
  }
};

export default Dictionary;
