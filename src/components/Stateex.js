import React from "react";

class Stateex extends React.Component {
  state = {
    id: 10,
    name: "Raj",
    loc: "kolkata",
    age: 22,
  };

  // valchng1=(event)=>{
  //     this.setState({id:event.target.value});
  // }
  // valchng2=(event)=>{
  //     this.setState({name:event.target.value});
  // }
  // valchng3=(event)=>{
  //     this.setState({loc:event.target.value});
  // }
  // valchng4=(event)=>{
  //     this.setState({age:event.target.value});
  // }

  valchng = (event) => {
    this.setState({ [event.target.name]: [event.target.value] });
  };

  render() {
    return (
      <div>
        <ul type="square">
          <li>ID : {this.state.id}</li>
          <li>NAME : {this.state.name}</li>
          <li>LOC : {this.state.loc}</li>
          <li>AGE : {this.state.age}</li>
        </ul>
        <br></br>
        ID : <input type="number" name="id" onChange={this.valchng} />
        NAME: <input type="text" name="name" onChange={this.valchng} />
        LOC: <input type="text" name="loc" onChange={this.valchng} />
        AGE : <input type="number" name="age" onChange={this.valchng} />
      </div>
    );
  }
}

export default Stateex;
