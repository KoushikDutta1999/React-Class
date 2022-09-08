import React from "react";

class Firstex extends React.Component {
  componentWillMount() {
    document.title = "USECASE 1";
  }

  componentWillUnmount() {
    document.title = "ReactApp";
    alert("Usecase 1 is unloaded!");
  }

  render() {
    return (
      <div>
        <h2 style={{ color: "green" }}>USE CASE 1</h2>
        <br></br>
        <table border="1">
          <tr>
            <th>Fname</th>
            <th>Lname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Koushik</td>
            <td>Dutta</td>
            <td>22</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Firstex;
