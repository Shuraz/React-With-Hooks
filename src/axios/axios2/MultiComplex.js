import axios from "axios";
import React, { useState, useEffect } from "react";
const url = "https://reqres.in/api/users";

function MultiComplex() {
  const [state, setstate] = useState({});
//   const [stateData, setstateData] = useState({ info: {}, main: [] });
  const getData = () => {
    axios.get(url).then((resp) => {
      setstate(resp.data);
      ////other way to use
    //   setstateData({ ...stateData, info: resp.data, main: resp.data.data });
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const {page, data, support} = state;
  console.log(data);

  //other way...
//   const { page, support } = stateData.info;
  return (
    <div>
                  
            { page && page}
           <p>{support && support.text}</p>
           {data && data.map((item=>{

                return(
                    <div key={item.id}>
                        <p>{item.email}</p>
                        <p>{item.first_name}</p>
                    </div>
                )
               }))
           }

      {/* {page}
      <p>{support && support.text}</p>
      {
       stateData.main.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.email}</p>
              <p>{item.first_name}</p>
            </div>
          );
        })} */}
    </div>
  );
}

export default MultiComplex;
