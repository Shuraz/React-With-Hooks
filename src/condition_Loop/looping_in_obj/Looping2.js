import React, { useState, useEffect } from "react";
import { blogDetailsdata } from "./blogDetailsData";
// 1 direct data access,  2 data initiaizing in state and 3. with setState()
function Looping2() {
  // const {author, address, data}=blogDetailsdata;
 // const [state, setstate] = useState(blogDetailsdata);
 const [state, setstate] = useState({})
 const{author,address,data}=state;
 console.log(data);
useEffect(() => {
     setstate(blogDetailsdata);
}, [])
  return (
    <div>
      {/*  <h2>{author}</h2>
            <h2>{address}</h2>
           {
                data.map((item)=>{
                    return(
                        <div>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            } */}
{/* 
      <h2>{state.author}</h2>
      <h2>{state.address}</h2>
      {state.data.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        );
      })} */}


      <h2>{author}</h2>
      <h2>{address}</h2>
      {data && data.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
      
    </div>
  );
}

export default Looping2;
