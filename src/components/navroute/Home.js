import React from "react";

export default function Home(props) {
  const signOut = () => {
    props.history.push("/login");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <hr />
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
