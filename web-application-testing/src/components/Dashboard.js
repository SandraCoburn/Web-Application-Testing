import React from "react";
const Dashboard = props => {
  return (
    <div className="home">
      <h2 className="home__name">{props.ball}</h2>
      <div className="home__score">{props.score}</div>
    </div>
  );
};
export default Dashboard;
