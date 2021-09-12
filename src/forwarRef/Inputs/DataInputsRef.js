import React, { useRef, useEffect } from "react";
import Input from './Input'
function DataInputsRef() {
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
      <Input type="text" onKeyDown={firstKeyDown} placeholder="enter Name" ref={refName} />
      <br />
      <Input type="text" onKeyDown={lastKeyDown} placeholder="enter Address" ref={refAddress} />
      <br />
      <button type="button" onKeyDown={submitKeyDown}ref={refSubmit}>Submit</button>
    </div>
  );
}

export default DataInputsRef;
