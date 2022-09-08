import React from "react";
import AuthButton from "./AuthButton";

class Condrend2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "hello",
    };
  }

  render() {
    return (
      <div>
        <h1>Props Passing concept in React.</h1>
        <AuthButton x={this.state.isLoggedIn} />
      </div>
    );
  }
}

export default Condrend2;
