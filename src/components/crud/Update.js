import React from "react";
import axios from "axios";

class Update extends React.Component {
  updateUser = (e) => {
    axios
      .post("http://localhost/CI_Webservice/CrudControl/updateByID", {
        id: "28",
        user_name: "Santu",
        user_email: "santu@gmail.com",
        user_contact: "9090898978",
        user_gender: "male",
        user_location: "digha",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return <button onClick={this.updateUser}>UPDATE</button>;
  }
}

export default Update;
