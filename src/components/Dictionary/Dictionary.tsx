import React, { useRef } from "react";
import axios, { AxiosResponse } from "axios";

const Dictionary: React.FC = () => {
  const searchQuery = useRef("");

  const handleResponse = (response: AxiosResponse) => {
    console.log(response.data[0]);
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
    <div className="Dictionary">
      <div className="mt-5 mx-5">
        <form onSubmit={handleSearch}>
          <input type="search" onChange={onSearchQueryChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Dictionary;
