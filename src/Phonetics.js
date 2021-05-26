import React from "react";

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
          Listen
        </button>
        <br />
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}
