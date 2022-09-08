import React, { useState, useEffect } from "react";

function Hookseg2() {
  // Define State
  const [name, setName] = useState({ firstName: "Koushik", surname: "Dutta" });
  const [title, setTitle] = useState("REACT");

  // Call the use effect hook
  // pass in an empty array as a second argument
  useEffect(() => {
    const timer = setInterval(() => {
      setName({ firstName: "Shedrack", surname: "Akintayo" });
      setTitle("Test React Js");
    }, 5000);
    // clearing interval
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {name.firstName}</h3>
      <h3>Surname: {name.surname}</h3>
    </div>
  );
}
export default Hookseg2;
