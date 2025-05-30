import React from "react";

const back_space = '<-'

function DisplayContainer({ display, result, backspace, clear }) {
  return (
    <>
      <div className="display-container">
        <div className="display">
          <div className="input-field">{display}</div>
          <div className="answer-field">{result}</div>
        </div>
        <div className="other-btns">
          <button className="colored-btn" onClick={backspace}>
            <i className="material-icons">{back_space}</i>
          </button>
          <button onClick={clear} className="AC-btn colored-btn">
            AC
          </button>
        </div>
      </div>
    </>
  );
}

export default DisplayContainer;