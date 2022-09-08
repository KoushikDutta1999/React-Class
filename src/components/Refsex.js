import React from "react";

//Refs provide a way to access DOM nodes or React elements created in the render method.

class Refsex extends React.Component {
  constructor(props) {
    super(props);
    this.callRef = React.createRef(); //create a reference
    this.callRef2 = React.createRef();
    this.callRef3 = React.createRef();
  }
  addingRefInput = (e) => {
    alert(this.callRef.current.value + "......." + this.callRef2.current.value);
  };
  textchng = (e) => {
    this.callRef.current.value = "Have a nice day!!!!";
    this.callRef3.current.innerText = "Thank you visit again!";
  };
  render() {
    return (
      <div>
        ENTER NAME:
        <input type="text" ref={this.callRef} />
        <br></br>
        ENTER DATE:
        <input type="date" ref={this.callRef2} />
        <br></br>
        <input type="button" value="Click" onClick={this.addingRefInput} />
        <br></br>
        <input type="button" value="Show" onClick={this.textchng} />
        <br></br>
        <h2 ref={this.callRef3}>Welcome to this page!</h2>
      </div>
    );
  }
}
export default Refsex;
