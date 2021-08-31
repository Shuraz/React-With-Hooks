import React, { useEffect } from 'react'

function Model({modelContent, closeModel}) {
    
        useEffect(()=>{
            setTimeout(()=>{
                closeModel();
            },3000)
        })
    return (

        <div>
            <h4>{modelContent}</h4>
        </div>
    )
}

export default Model
