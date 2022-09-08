import React from "react";
import axios from "axios";

class DemoAPI extends React.Component {
  state = {
    id: "",
  };
  searchUser = (e) => {
    // validation..........
    axios
      .post("http://localhost/CI_Webservice/CrudControl/showByID", {
        id: "9",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return <button onClick={this.searchUser}>SEARCH</button>;
  }
}

export default DemoAPI;
