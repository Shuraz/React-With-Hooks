import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
const GET_WEATHER_QUERY = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;

function Home_weather() {
  const [city, setcity] = useState("");

  const [getWeather, { data, loading, error }] =
    useLazyQuery(GET_WEATHER_QUERY);

  if (error) return <h1>Error loading data... </h1>;
  if (data) {
    console.log(data);
  }
  return (
    <div>
      <h1>Search for the Weather</h1>
      <input
        type="text"
        placeholder="City Name..."
        onChange={(e) => {
          setcity(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getWeather({
            variables: { name: city },
          });
        }}
      >
        Search
      </button>

      {data && (
        <>
          <h1>City: {data.getCityByName.name}</h1>
          <p>Temp: {data.getCityByName.weather.temperature.actual}</p>
        </>
      )}
    </div>
  );
}

export default Home_weather;
