import React, { useState, Fragment, useEffect } from 'react';

function ValueIncrease() {
    let title='default title';
    const [stateTitle, setTitle] = useState(title);


  
    const changeTitle=()=>{
        if(stateTitle==='default title'){
        setTitle("hello world")
        }
        else{
            setTitle('default title')
        }
    };

   return(
        <Fragment>
            <h2>{stateTitle}</h2>
            <button type='button' onClick={changeTitle}>Change Title</button>
        </Fragment>
   );
}

export default ValueIncrease
