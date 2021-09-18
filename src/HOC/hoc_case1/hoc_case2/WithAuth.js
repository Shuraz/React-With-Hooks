import React from 'react'

const WithAuth=(Component)=>{
    return function AuthenticatedComponent({...props}){
        const isAuthenticated=()=>{
            return props.isAuthenticated
        }
        const loginErrorMessage =(
            <div>
                Please Click this link to login again.
            </div>
        )
        return(

            <div>
                {
                    isAuthenticated===true? <Component {...props}/>:loginErrorMessage
                }

            </div>
        )

    }
}

export default WithAuth;