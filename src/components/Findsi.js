import React from "react";

export default function Findsi(props) {
  let si = (props.p * props.r * props.t) / 100;
  let amt = parseInt(si) + parseInt(props.p);
  return (
    <h3>
      SI IS : {si} AMOUNT IS : {amt}
    </h3>
  );
}
