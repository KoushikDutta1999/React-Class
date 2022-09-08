import React from "react";

import { Link } from "react-router-dom";

class Menu extends React.Component {
  state = {
    id: 101,
    name: "sourav kundu",
    loc: "kolkata",
  };

  render() {
    const li_style = {
      float: "left",
      display: "inline-block",
      backgroundColor: "lightgreen",
      width: "19%",
      border: "5px brown double",
    };
    // routing path(/firstex) or pathname(/compnew) can be anything
    // but the routing path and app.js path has to be same(/firstex)
    return (
      <div>
        <ul>
          <li style={li_style}>
            <Link to="/firstex">
              <b>UseCase1</b>
            </Link>
          </li>
          <li style={li_style}>
            <Link to={{ pathname: "/compnew/" + this.state.loc }}>
              <b>UseCase2</b>
            </Link>
          </li>
          <li style={li_style}>
            <Link
              to={{
                pathname: "/users/",
                u_id: this.state.id,
                u_name: this.state.name,
                u_loc: this.state.loc,
              }}
            >
              <b>UseCase3</b>
            </Link>
          </li>
          <li style={li_style}>
            <Link
              to={{
                pathname: "/empinfo/",
                emp_data: {
                  u_id: this.state.id,
                  u_name: this.state.name,
                  u_loc: this.state.loc,
                },
              }}
            >
              <b>UseCase4</b>
            </Link>
          </li>
          <li style={li_style}>
            <Link
              to={{
                pathname: "/studinfo/",
                stud_data: {
                  st_id: this.state.id,
                  st_name: this.state.name,
                  st_loc: this.state.loc,
                },
              }}
            >
              <b>UseCase5</b>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
