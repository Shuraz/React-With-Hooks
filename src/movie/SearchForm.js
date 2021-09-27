import React from "react";
import { useGlobalContext } from "./context";

function SearchForm() {
  const { error, query, setQuery } = useGlobalContext();
  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor="name">Search Movie</label><br />
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      /> <br />
      {
          error.show && <p>{error.msg}</p>
      }
    </form>
  );
}

export default SearchForm;
