import axios from "axios";
import React, { useState, useEffect } from "react";
function GetAxios_inObj() {
    // const initialState={
    //     maindata:[],
    //     infodata:{}
    // }
  const [state, setstate] = useState({ maindata:[], infodata:{}});

  const getHandle = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((resp) => {
        // console.log(resp);
        // console.log(resp.data);
        setstate({...state, infodata:resp.data, maindata:resp.data.data });
        //creating 2 or more setState gives bugs.
        // setstate({...state, maindata:resp.data.data})

    
      })
      .then(() => {})
      .catch((err) => console.log(err));
  };
  //   console.log(myDataState);
 const { page, total} = state.infodata;
  const [...urlmaindata]= state.maindata;
//   console.log(data);
//   const datalist = [];

  return (
    <div>
      <button onClick={getHandle}>GET</button>

      <h1>Headers</h1>
      <h1>Data</h1>
      <p>{page}</p>
      <p>{total}</p>
      {
            urlmaindata.map(item=>{
              return  <p key={item.id}>{item.email}</p>
            })
        }
     {/* {datalist} */}
      <h1>Config</h1>
    </div>
  );
}

export default GetAxios_inObj;
