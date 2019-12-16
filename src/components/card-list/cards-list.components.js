import React from "react";
import "./card-list.styles.css";

export const CardList = props => {
  console.log(props);
  return (
    <div>
      <div className="card-list">
        {props.characters.map(characters => (
          <h1 key={characters.id}>{characters.name}</h1>
        ))}
      </div>
    </div>
  );
};
