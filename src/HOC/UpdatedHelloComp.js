import React from 'react'
import HOC_AddStyle from './HOC_AddStyle'
import HelloComp from './HelloComp'
function UpdatedHelloComp() {

     const UpdatedHello= HOC_AddStyle(HelloComp);
    return (
        <UpdatedHello name="WORLD"/>
    )
}

export default UpdatedHelloComp
