import React from "react";
const Button = props => {
  return (
    <button
      onClick={() => props.setState(props.score + 1)}
      className="awayButtons__touchdown"
    >
      {props.home}
    </button>
  );
};
export default Button;
