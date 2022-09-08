import React from "react";
import axios from "axios";
//import swal from 'sweetalert';
import { Redirect } from "react-router";

class Dashboard extends React.Component {
  state = {
    user_data: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios
        .get("https://reqres.in/api/users/2")
        .then((res) => {
          this.setState({ user_data: [res.data.data], loading: false });
          //console.log('data',res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  render() {
    if (
      !localStorage.getItem("user_id") ||
      localStorage.getItem("user_id") === undefined
    ) {
      return <Redirect to="/login"></Redirect>;
    }

    return this.state.user_data.map((item) => {
      return (
        <>
          <label>USERID :</label>
          <p>{item.id}</p>
          <br></br>
          <label>FIRST NAME :</label>
          <p>{item.first_name}</p>
          <br></br>
          <label>LAST NAME :</label>
          <p>{item.last_name}</p>
          <br></br>
          <label>EMAIL :</label>
          <p>{item.email}</p>
          <br></br>
          <label>PROFILE IMAGE :</label>
          <p>
            <img
              src={item.avatar}
              alt="here is a pic"
              height="100"
              width="100"
            ></img>
          </p>
          <br></br>
        </>
      );
    });
  }
}
export default Dashboard;
