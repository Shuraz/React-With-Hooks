import axios from "axios";
import React, { useState } from "react";
// const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";
function GetAxios() {
  const [myDataState, setstateMyData] = useState([]);
//   console.log(myDataState);
  const getHandle = () => {
    console.log("getting data");
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((resp) => {
        // console.log(resp);
        // console.log(resp.data);
        setstateMyData(resp.data);
      })
      .catch((err) => console.log(err))

    // axios.get(url)
    // .then((resp)=>{ setstateMyData(resp.data)})
    // .catch((error)=>{console.log(error)})
  };
  console.log(myDataState);
  return (
    <div>
      <button onClick={getHandle}>GET</button>

      <h1>Headers</h1>
      <h1>Data</h1>
       
      {myDataState.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
      <h1>Config</h1>
    </div>
  );
}

export default GetAxios;
