import React, { useState } from "react";
import StartMenu from "./components/StartMenu";
import Game from "./components/Game";

import "./App.css";

const App = () => {
  const [isStarted, setIsStarted] = useState(false);

  function startGame() {
    setIsStarted(true);
  }

  return (
    <div className="App">
      <h1>The Hangman Game</h1>
      <div className="game-container">
        {isStarted ? <Game /> : <StartMenu startGame={startGame} />}
      </div>
    </div>
  );
};

export default App;
