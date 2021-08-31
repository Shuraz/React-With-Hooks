import React from 'react'
// update with style.
// also to show loader while fetching data
// also simple comp can be authenticated with HOC and then rendering with designs update and values
const HOC_AddStyle = (BaseComponent) =>(props)=>{
    return (
        <BaseComponent {...props} style={{ fontWeight: 700, color: 'green'}}/>
        )
}

export default HOC_AddStyle
