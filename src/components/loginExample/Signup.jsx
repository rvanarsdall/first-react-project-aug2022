import React, { useState } from "react";

const Signup = (props) => {
  const [password2, setPassword2] = useState("");
  return (
    <>
      <h2>Hello from Signup</h2>
      <label>Username</label>
      <input
        type="text"
        value={props.userName}
        onChange={(e) => props.setUserName(e.target.value)}
      />
      <br />
      <label>Password</label>
      <input
        type="text"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <br />
      <label>Retype Password</label>
      <input
        type="text"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <br />
      <br />
      {/* 
      Create a turnary for if the props.password and password2 match display in green that they match otherwise password does not match in red

      BONUS: Display this only if props.password has more than one character
      */}
      {props.password.length > 0 ? (
        props.password === password2 ? (
          <p style={{ color: "green" }}>Password Match</p>
        ) : (
          <p style={{ color: "red" }}>Password Does Not Match</p>
        )
      ) : null}

      <button onClick={props.toggleLogin}>Child Signup Button</button>
    </>
  );
};

export default Signup;
