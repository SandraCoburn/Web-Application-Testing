import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import BottomRow from "./components/BottomRow";
import Button from "./components/Button";

import "./App.css";

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [hit, setHit] = useState(0);
  if (ball > 3) {
    setBall(0);
  }
  if (strike > 2) {
    setStrike(0);
  }
  useEffect(() => {
    if (hit === 1) {
      setBall(0);
      setStrike(0);
    }
  }, [hit]);
  useEffect(() => {
    if (foul >= 1) {
      setStrike(strike + 2);
    }
  }, [foul]);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Dashboard ball="Hit" score={hit} />
          <Dashboard ball="Ball" score={ball} />
          <Dashboard ball="Strike" score={strike} />
          <Dashboard ball="Foul" score={foul} />
        </div>

        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">INN</h3>
            <div className="down__value">Home</div>
          </div>

          <BottomRow number="1" score="0" />
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
          <div className="down__value">Visitor</div>

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
        <div className="homeButtons">
          <Button home="Hit" setState={setHit} score={hit} />
          <Button home="Ball" setState={setBall} score={ball} />
          <Button home="Strike" setState={setStrike} score={strike} />
          <Button home="Foul" setState={setFoul} score={foul} />
        </div>
      </section>
    </div>
  );
}

export default App;
