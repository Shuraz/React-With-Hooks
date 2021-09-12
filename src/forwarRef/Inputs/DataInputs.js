import React, { useRef, useEffect } from "react";

function DataInputs() {
  const refName = useRef(null);
  const refAddress = useRef(null);
  const refSubmit = useRef(null);

  useEffect(() => {
    refName.current.focus();
  }, []);   

const firstKeyDown=(e)=>{
    if(e.key=="Enter"){
        refAddress.current.focus();
    }
}
const lastKeyDown=(e)=>{
    if(e.key=="Enter"){
        refSubmit.current.focus();
    }
}
const submitKeyDown=(e)=>{
    //can use to trigger submit
    if(e.key=="Enter"){
        alert('form Submitted')
    }
   
}
  return (
    <div>
      <input type="text" onKeyDown={firstKeyDown} placeholder="enter Name" ref={refName} />
      <br />
      <input type="text" onKeyDown={lastKeyDown} placeholder="enter Address" ref={refAddress} />
      <br />
      <input type="button" onKeyDown={submitKeyDown} value="Submit" ref={refSubmit} />
    </div>
  );
}

export default DataInputs;
