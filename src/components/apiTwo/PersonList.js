import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch((err) => {
        console.log("error :" + err);
      });
  }

  render() {
    return (
      <div>
        <table border="1" width="80%" bgcolor="lightpink">
          <tr>
            <th>ID</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>CITY</th>
            <th>LAT</th>
            <th>LONG</th>
            <th>COMPANY</th>
          </tr>
          {this.state.persons.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.address.geo.lat}</td>
                <td>{item.address.geo.lng}</td>
                <td>{item.company.name}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
