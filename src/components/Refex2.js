import React from "react";

export default class Refex2 extends React.Component {
  constructor(props) {
    super(props);

    // Create the ref
    this.textInput = React.createRef();
    this.state = {
      value: [],
      names: [],
    };
  }

  // Set the state for the ref
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.value.push(this.textInput.current.value);
    this.setState({ names: this.state.value });
    //console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <h1>React Ref - createRef</h1>
        <ol type="I">
          {this.state.names.map((val, index) => {
            return <li key={index}>{val}</li>;
          })}
        </ol>
        <br></br>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textInput} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
