import React from "react";
import axios from "axios";

export default class Apipost extends React.Component {
  state = {
    name: "",
    job: "",
    id: "",
    createat: "",
  };

  valchng = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  apicall = (e) => {
    axios
      .post(`https://reqres.in/api/users`, {
        name: this.state.name,
        job: this.state.job,
      })
      .then((res) => {
        this.setState({
          id: res.data.id,
          createat: res.data.createdAt,
        });
      })
      .catch((err) => {
        alert("ERROR :", err);
      });
  };

  render() {
    return (
      <>
        <h2>Form</h2>
        NAME : <input type="text" name="name" onChange={this.valchng} />
        <br />
        <br />
        JOB : <input type="text" name="job" onChange={this.valchng} />
        <br />
        <br />
        <input type="button" value="INSERT" onClick={this.apicall} />
        <br />
        <br />
        <hr />
        <h3>ID : {this.state.id}</h3>
        <h3>CREATED AT : {this.state.createat}</h3>
      </>
    );
  }
}
