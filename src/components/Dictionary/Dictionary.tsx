import React, { useRef } from "react";

const Dictionary: React.FC = () => {
  const searchQuery = useRef("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Searching " + searchQuery.current);
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
