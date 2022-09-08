import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Apiex2() {
  const [item, setItem] = useState({});
  const viewdata = (event) => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res.data.data[0]);
        setItem(res.data.data[0]);
        console.log("ITEM : " + item);
        console.log("ID : " + res.data.data[0].id);
        console.log("EMAIL : " + res.data.data[0].email);
      })
      .catch((err) => {
        console.log("ERROR : " + err);
      });
  };

  return (
    <>
      <button onClick={viewdata}>SHOW</button>
      <ul>
        <li>{item.id}</li>
        <li>{item.email}</li>
        <li>{item.first_name}</li>
        <li>
          <img src={item.avatar} />
        </li>
      </ul>
    </>
  );
}
