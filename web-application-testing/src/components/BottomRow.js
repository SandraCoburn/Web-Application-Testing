import React from "react";
const BottomRow = props => {
  return (
    <div className="down">
      <h3 className="down__title">{props.number}</h3>
      <div className="down__value">{props.score}</div>
    </div>
  );
};
export default BottomRow;
