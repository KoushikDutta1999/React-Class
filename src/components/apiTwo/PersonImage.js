import React from "react";
import axios from "axios";

export default class PersonImage extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://reqres.in/api/users?page=2`)
      .then((res) => {
        const persons = res.data.data; // 2nd data is for the data name in the API LINK
        this.setState({ persons });
      })
      .catch((err) => {
        console.log("error :" + err);
      });
  }

  render() {
    return (
      <div>
        <h2>Api Image</h2>
        <table border="1">
          <tr>
            <th>ID</th>
            <th>EMAIL</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>AVATAR</th>
          </tr>
          {this.state.persons.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                  <img
                    src={item.avatar}
                    alt="avatar"
                    width="100"
                    height="100"
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
