import React from "react";
import Findsi from "./Findsi";

export default class Dimension extends React.Component {
  state = {
    prin: "",
    rate: "",
    time: "",
    status: false,
  };

  valChng = (event) => {
    this.setState({ [event.target.name]: [event.target.value] });
  };

  find = (event) => {
    this.setState({ status: true });
  };

  render() {
    return (
      <>
        ENTER PRINCIPAL :
        <input type="number" name="prin" onChange={this.valChng} />
        <br></br>
        ENTER RATE :
        <input type="number" name="rate" onChange={this.valChng} />
        <br></br>
        ENTER TIME :
        <input type="number" name="time" onChange={this.valChng} />
        <br></br>
        <button onClick={this.find}>CALC</button>
        {this.state.status === true ? (
          <Findsi p={this.state.prin} r={this.state.rate} t={this.state.time} />
        ) : null}
      </>
    );
  }
}
