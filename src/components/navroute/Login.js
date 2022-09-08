import React from "react";

export default function Login(props) {
  const login = () => {
    props.history.push("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}
