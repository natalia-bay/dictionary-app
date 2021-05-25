import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              Definition: {definition.definition}
              <br />
              Synonyms: {definition.synonyms}
              <br />
              Examples: <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
