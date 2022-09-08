import React from "react";
import axios from "axios";

class DemoAPI extends React.Component {
  // state = {

  //  }
  registerUser = (e) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("RESPONSE:", res.data[1]);
        console.log("city :" + res.data[1].address.city);
        console.log("street :" + res.data[1].address.street);
        console.log("suite :" + res.data[1].address.suite);
        console.log("zip :" + res.data[1].address.zipcode);
        console.log("lat: :" + res.data[1].address.geo.lat);
        console.log("lon :" + res.data[1].address.geo.lng);
        console.log("userid :" + res.data[1].id);
        //   console.log(res.data[0].email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <button onClick={this.registerUser}>Show</button>
      </>
    );
  }
}

export default DemoAPI;
