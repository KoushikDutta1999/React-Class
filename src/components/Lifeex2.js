import React, { Component } from "react";

export default class Lifeex2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <>
        <p>{this.state.show ? <Child /> : null}</p>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Click me to toggle
        </button>
      </>
    );
  }
}

// The alert will popup because the component is about to be removed from the DOM
// which in our case is the Child component.

export class Child extends Component {
  componentWillUnmount() {
    alert("Child will unmount");
  }
  render() {
    return <>I am a child component</>;
  }
}
