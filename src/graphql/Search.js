import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
const QUERRY_SEARCH_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      currency
      capital
      emoji
    }
  }
`;
function Search() {
  const [searchText, setsearchText] = useState("");
  const [findCountry, { loading, data, error }] = useLazyQuery(QUERRY_SEARCH_COUNTRY);
  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Brazil..."
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
      />
      <button onClick={()=>{findCountry({variables: { code: searchText.toUpperCase()}})}}>Find it!!</button> <br />
      <h3>{data && data.country.name}</h3>
    </div>
  );
}

export default Search;
