import React from "react";

const StartMenu = ({ startGame }) => {
  return (
    <>
      <p className="start-paragraph">
        Try guess the random the word a letter by letter!
      </p>
      <button className="start-btn" onClick={startGame}>
        Start Game
      </button>
    </>
  );
};

export default StartMenu;
