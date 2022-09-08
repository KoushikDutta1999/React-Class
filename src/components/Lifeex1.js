import React, { Component } from "react";

export default class Lifeex1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "This name will change in 5 sec",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "Welcome to Ejobindia kolkata!" });
    }, 5000);
  }

  componentDidUpdate(prevState) {
    if (prevState.name !== this.state.name) {
      document.getElementById("statechange").innerHTML =
        "Yes the state is changed";
    }
  }

  render() {
    return (
      <div>
        State was changed : {this.state.name}
        <br></br>
        <h3 id="statechange">Hi </h3>
      </div>
    );
  }
}
