import React from "react";
import spinner from "../../resources/spinner.gif";

const Spinner = () => {
  return (
    <>
      <img src={spinner} alt="loading..." style={style} />
    </>
  );
};

export default Spinner;
const style = {
  width: "200px",
  margin: "auto",
  display: "block"
};
