import React from "react";
import axios from "axios";

class Insert extends React.Component {
  //   state={
  //     item_id:'PB0002',
  //     item_name:'WATER FILTER',
  //     item_note:'PURIFIER',
  //     item_stock:'10',
  //     item_price:'1000',
  //     item_unit:'20'
  //   }

  insertUser = (e) => {
    axios
      .post("http://localhost/CI_Webservice/CrudControl/insertData", {
        user_name: "Shamik",
        user_email: "sham12@gmail.com",
        user_contact: "700905050",
        user_gender: "male",
        user_location: "Haryana",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return <button onClick={this.insertUser}>INSERT</button>;
  }
}

export default Insert;
