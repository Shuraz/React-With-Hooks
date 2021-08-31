import React,{useContext} from 'react'
import {UserCxt} from './UserProfile';
    
function User() {
    const {name} = useContext(UserCxt)
    return (
        <div>
               <h1>User Name: </h1>
               <h2>{name}</h2>
        </div>
    )
}

export default User
