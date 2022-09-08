import React from "react";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    //this.props=props;
    this.state = { hello: "welcome to Kolkata!" };
    console.log("constructor is called");
  }

  componentWillMount() {
    console.log("componentWillMount()  is called");
  }

  componentDidMount() {
    console.log("componentDidMount()  is called");
  }

  changeState = (e) => {
    this.setState({ hello: "EjobIndia!" });
  };

  render() {
    return (
      <div>
        <h1>Welcome All, {this.state.hello}</h1>
        <h2>
          <button onClick={this.changeState}>Click Here!</button>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate()  is called");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate()  is called");
    alert("state value will be update soon....");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() is called");
    alert("State value is updated");
  }
}

export default Lifecycle;
