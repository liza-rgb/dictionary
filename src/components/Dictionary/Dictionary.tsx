import React, { useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";

import WordInfo from "../WordInfo";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import ImagesList from "../ImagesList";

import "./Dictionary.css";

interface DictionaryProps {
  defaultWord: string;
}

const Dictionary: React.FC<DictionaryProps> = ({ defaultWord }) => {
  const searchQuery = useRef(defaultWord);
  const [definition, setDefinition] = useState({});
  const [images, setImages] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  const handleImagesResponse = (response: AxiosResponse) => {
    setImages(response.data.photos);
  };

  const handleSearchResponse = (response: AxiosResponse) => {
    setDefinition(response.data[0]);

    const imagesApiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    const apiKey = "Uilq3OR8xJW9aPA1jgrEcTRsmwQUo51dwxvjznD8RfSGb60AKjVodlXc";
    axios
      .get(imagesApiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImagesResponse);
  };

  const handleSearchRejection = () => {
    setError(`Can't found '${searchQuery.current}'. Please try again!`);
  };

  const onSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchQuery.current = event.target.value;
    setError("");
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search();
  };

  const search = () => {
    const searchApiURL =
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchQuery.current;
    axios
      .get(searchApiURL)
      .then(handleSearchResponse)
      .catch(handleSearchRejection);
  };

  const load = () => {
    search();
    setIsLoaded(true);
  };

  const getContent = () => {
    if (Object.keys(definition).length !== 0) {
      return (
        <>
          <WordInfo info={definition} />
          {images ? (
            <section>
              <ImagesList images={images} />
            </section>
          ) : (
            ""
          )}
        </>
      );
    }
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
        {getContent()}
      </div>
    );
  } else {
    load();
    return null;
  }
};

export default Dictionary;
