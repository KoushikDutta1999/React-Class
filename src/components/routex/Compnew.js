import React from "react";

class Compnew extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ color: "green" }}>USE CASE 2</h2>
        <label>Prop value is :</label>
        {this.props.match.params.var_loc}
      </div>
    );
  }
}
export default Compnew;
