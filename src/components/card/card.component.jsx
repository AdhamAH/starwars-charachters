import React from "react";
import "./card.styles.css";


export const Card = (props) => (
  <div className="card-container ">
    <img alt="characters" src={props.character.image} className="images" />
    <h2>{props.character.name}</h2>
    <h2>Species: {props.character.species}</h2>
  </div>
);
