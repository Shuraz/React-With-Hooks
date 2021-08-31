import React from 'react'
import HOC_AddStyle from './HOC_AddStyle'
 


function HelloComp({name, ...otherProps}) {
    return (
        <div {...otherProps}>
            <h1>Hello {name}</h1>
        </div>
    )
}
// can be inside like this from different comp like UpdatedHelloComp
// function UpdatedHelloComp() {

//     const UpdatedHello= HOC_AddStyle(HelloComp);
//    return (
//        <UpdatedHello name="WORLD"/>
//    )
// }

export default HelloComp;
