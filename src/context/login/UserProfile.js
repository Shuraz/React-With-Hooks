import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const UserCxt = createContext(null);
function UserProfile() {
  const [name, setStateName] = useState("");
  return (
      //value needs to be passes as object in {}
    <UserCxt.Provider value={{name, setStateName}}>
      <h1>User Profile</h1>
      <Login />
      <User />
    </UserCxt.Provider>
  );
}

export default UserProfile;
