import React from "react";
import axios from "axios";
import swal from "sweetalert";

class Register extends React.Component {
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
      .post("https://reqres.in/api/register", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        swal("Success!", "Registration Successful", "success"); //showing sweet alert
        console.log("res:", response.data);
        localStorage.setItem("user_id", response.data.id); //working like session or cookies
        this.props.history.push("/login"); // working like action in html form
      })
      .catch((err) => {
        swal("Sorry Failed!", "Registration Failed", "error");
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <h3>Please Register Here</h3>
        <form>
          EMAIL :
          <input type="text" name="email" onChange={this.handleChange} />
          <br></br>
          <br></br>
          PASSWORD :
          <input type="password" name="password" onChange={this.handleChange} />
          <br></br>
          <br></br>
          <input
            type="submit"
            name="btnsub"
            value="REGISTER"
            onClick={this.handleSubmit}
          />
        </form>
      </>
    );
  }
}

export default Register;
