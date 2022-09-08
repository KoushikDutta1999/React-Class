import React, { useState } from "react";

function Hookseg1() {
  const [age, setAge] = useState("__");
  const [loc, setLoc] = useState("___");
  const [name, setName] = useState("____");

  const valueChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "age") {
      setAge(e.target.value);
    } else if (e.target.name === "loc") {
      setLoc(e.target.value);
    }
  };

  return (
    <div>
      <h3>
        I am {age} Years Old . My name is {name} . I stay in {loc}
      </h3>
      <div>
        Enter name :
        <input type="text" name="name" onChange={valueChange} />
        <br></br>
        Enter age :
        <input type="number" name="age" onChange={valueChange} />
        <br></br>
        Enter Loc :
        <input type="text" name="loc" onChange={valueChange} />
        <br></br>
      </div>
    </div>
  );
}

export default Hookseg1;
