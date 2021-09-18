import React from 'react'
import WithAuth from './WithAuth'
function ProtectedComponent({props}) {

props.isAuthenticated=()=>{
    return props.isAuthenticated= true;
}
console.log("props.isAuthenticated");
    return (
        <div>
            This Page is viewable by authenticated users...
        </div>
    )
}

export default WithAuth(ProtectedComponent)
