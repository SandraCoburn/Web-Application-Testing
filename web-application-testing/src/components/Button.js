import React from "react";
const Button = props => {
  return (
    <button
      //     onClick={() => setTigersScore(tigersScore + 7)}
      className="awayButtons__touchdown"
    >
      {props.home}
    </button>
  );
};
export default Button;
