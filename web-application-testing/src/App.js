import React from "react";
import Dashboard from "./components/Dashboard";
import BottomRow from "./components/BottomRow";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Dashboard ball="Batter" />
          <Dashboard ball="Ball" />
          <Dashboard ball="Strike" />
          <Dashboard ball="Out" />
        </div>

        <div className="bottomRow">
          <div className="down">
            <h2>INNING</h2>
          </div>

          <BottomRow number="1" score="3" />
          <BottomRow number="2" score="0" />
          <BottomRow number="3" score="0" />
          <BottomRow number="4" score="0" />
          <BottomRow number="5" score="0" />
          <BottomRow number="6" score="0" />
          <BottomRow number="7" score="0" />
          <BottomRow number="8" score="0" />
          <BottomRow number="9" score="0" />
          <BottomRow number="10" score="0" />
        </div>
        <div className="bottomRow">
          <div className="down__value">0</div>
          <div className="down__value">0</div>
          <div className="down__value">0</div>
          <div className="down__value">0</div>
          <div className="down__value">0</div>
          <div className="down__value">0</div>
          <div className="down__value">0</div>
          <div className="down__value">0</div>
          <div className="down__value">0</div>
          <div className="down__value">0</div>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <Button home="Strike" />
          <Button home="Ball" />
          <Button home="Foul" />
          <Button home="Hit" />
        </div>
      </section>
    </div>
  );
}

export default App;
