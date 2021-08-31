import React, { useContext } from "react";
import { UserCxt } from "./UserProfile";
function Login() {
  const { setStateName } = useContext(UserCxt);
  return (
    <div>
      <input
        onChange={(e) => {
          setStateName(e.target.value);
        }}
        id="name"
      />
    </div>
  );
}

export default Login;
