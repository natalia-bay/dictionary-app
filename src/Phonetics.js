import React from "react";
import "./Phonetics.css";

export default function Photenics(props) {
  const audio = new Audio(props.phonetics.audio);

  function handleClick() {
    audio.play();
  }

  if (props.phonetics) {
    return (
      <div className="Phonetics">
        <button
          type="button"
          className="Phonetics-button"
          onClick={handleClick}
        >
          <i className="fas fa-volume-up"></i>
        </button>
        <span className="Phonetics-text">{props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
