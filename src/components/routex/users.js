import React from "react";
// import { useLocation } from "react-router-dom";

class Users extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ color: "green" }}>USE CASE 3</h2>
        <h1>WELCOME {this.props.location.u_id}</h1>
        <h2>Your Name : {this.props.location.u_name}</h2>
        <h2>Your location : {this.props.location.u_loc}</h2>
      </div>
    );
  }
}

export default Users;
