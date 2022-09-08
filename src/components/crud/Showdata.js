import React from "react";
import axios from "axios";

class Showdata extends React.Component {
  showUser = (e) => {
    // validation..........
    axios
      .get("http://localhost/CI_Webservice/CrudControl/showData")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return <button onClick={this.showUser}>SHOW</button>;
  }
}

export default Showdata;
