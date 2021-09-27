import React, { useRef } from "react";

function Signup() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  return (
    <div>
      <h1>Sign Up</h1>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" ref={emailRef} required />
        <br />
        <label htmlFor="pasword">Password</label>
        <input type="password" ref={passwordRef} required />
        <br />
        <label htmlFor="confirm-password">Password Confirm</label>
        <input type="confirm-password" ref={confirmPasswordRef} required />
        <br />
        <button type="submit">Sign Up</button>
      </form>

      <div>
        <h3>Already have a account? Login here</h3>
      </div>
    </div>
  );
}

export default Signup;
