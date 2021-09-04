import React,{useState, useEffect} from "react";
import { blogDetailsdata } from "./blogDetailsData";
// 1 direct data access,  2 data initiaizing in state and 3. with setState()
function Looping1() {
   // const [state, setstate] = useState(blogDetailsdata)
   const [state, setstate] = useState([])
   useEffect(() => {
    setstate(blogDetailsdata);
   }, [])
   
  return (
    <div>
        
      {/*
      {blogDetailsdata.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <h2>{item.name}</h2>
            <h2>{item.description}</h2>
            {item.list_1.map((lt) => {
              return <p>{lt.text}</p>;
            })}
          </div>
        );
      })} */}

         
      {/* {state.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <h2>{item.name}</h2>
            <h2>{item.description}</h2>
            {item.list_1.map((lt) => {
              return <p>{lt.text}</p>;
            })}
          </div>
        );
      })} */}

            {state.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <h2>{item.name}</h2>
            <h2>{item.description}</h2>
            {item.list_1.map((lt) => {
              return <p>{lt.text}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Looping1;
