import React from "react";
import axios from "axios";

class Delete extends React.Component {
  state = {
    msg: "",
  };
  deleteUser = (e) => {
    axios
      .post("http://localhost/CI_Webservice/CrudControl/deleteData", {
        id: "28",
      })
      .then((res) => {
        console.log(res.data.msg);
        this.setState({ msg: res.data.msg });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <button onClick={this.deleteUser}>DELETE</button>
        <h3>{this.state.msg}</h3>
      </>
    );
  }
}

export default Delete;
