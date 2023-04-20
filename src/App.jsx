import { useState } from "react";

import "./App.css";

const App = () => {
  function startGame() {
    // ..
  }

  return (
    <div className="App">
      <h1>The Hangman Game</h1>
      <div className="game-container">
        <p className="start-paragraph">
          Try guess the random word letter by letter!
        </p>
        <button className="start-btn" onClick={startGame}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default App;
