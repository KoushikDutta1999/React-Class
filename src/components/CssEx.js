import React from "react";

class CssEx extends React.Component {
  render() {
    const mystyle = {
      color: "green",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };

    return (
      <div>
        <h1 style={{ color: "red", backgroundColor: "lightblue" }}>
          Hello Inline Css Style!
        </h1>
        <p style={mystyle}>
          This is a style to add multiple css properties in internal Css
        </p>
        <h3 style={mystyle}>Thank you!</h3>
      </div>
    );
  }
}

export default CssEx;
