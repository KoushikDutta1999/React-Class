import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { Redirect } from "react-router";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        swal("Success!", "Login Successful", "success"); //showing sweet alert
        console.log("res:", response.data);
        localStorage.setItem("user_id", response.data.token); //working like session or cookies
        this.props.history.push("/showdata"); // working like action in html form
      })
      .catch((err) => {
        swal("Sorry Failed!", "Login Failed", "error");
        console.log(err);
      });
  };
  render() {
    if (localStorage.getItem("user_id")) {
      return (
        <React.Fragment>
          <h2>LOGIN PLEASE : </h2>
          <form>
            EMAIL :
            <input type="text" name="email" onChange={this.handleChange} />
            <br></br>
            <br></br>
            PASSWORD :
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <br></br>
            <br></br>
            <input
              type="submit"
              name="btnsub"
              value="LOGIN"
              onClick={this.handleSubmit}
            />
          </form>
        </React.Fragment>
      );
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}

export default Login;
