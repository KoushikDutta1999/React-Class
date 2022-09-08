import React from "react";
import axios from "axios";

class Apiex extends React.Component {
  state = {
    userid: "",
    id: "",
    title: "",
    body: "",
  };

  show = (event) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        this.setState({
          userid: res.data.userId,
          id: res.data.id,
          title: res.data.title,
          body: res.data.body,
        });
      })
      .catch((err) => {
        console.log("ERROR CAUSE : " + err);
      });
  };

  render() {
    return (
      <>
        <h3>API ACCESS :</h3>
        <input type="button" value="CLICK" onClick={this.show} />
        <br></br>
        <br></br>
        USERID : {this.state.userid}
        <br></br>
        ID : {this.state.id}
        <br></br>
        TITLE : {this.state.title}
        <br></br>
        BODY : {this.state.body}
      </>
    );
  }
}

export default Apiex;
