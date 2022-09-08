import React from "react";

class Form4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      errormessage: "",
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "age") {
      if (val === "" || val == null) {
        err = <strong>Your age must not be empty!</strong>;
      } else if (val < 18 || val > 25) {
        err = <strong>Your age must be between 18 to 25!</strong>;
      }
    }
    if (nam === "username") {
      if (val === "" || val == null) {
        err = <strong>Your name must not be empty!</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [event.target.name]: [event.target.value] });
  };
  render() {
    return (
      <form>
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type="number" name="age" onChange={this.myChangeHandler} />
        <br></br>
        {this.state.errormessage}
      </form>
    );
  }
}

export default Form4;
