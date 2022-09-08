import React from "react";
import axios from "axios";

export default class ApiListResource extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    axios
      .get(`https://reqres.in/api/unknown`)
      .then((res) => {
        const list = res.data.data; // 2nd data is for the data name in the API LINK
        this.setState({ list });
      })
      .catch((err) => {
        console.log("error :" + err);
      });
  }

  render() {
    return (
      <div>
        <h2>Api List Resource</h2>
        {this.state.list.map((item) => {
          return (
            <p>
              {item.id}
              <br />
              {item.name}
              <br />
              {item.year}
              <br />
              {item.color}
              <br />
              {item.pantone_value}
              <hr />
            </p>
          );
        })}
      </div>
    );
  }
}
