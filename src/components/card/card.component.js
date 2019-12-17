import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container ">
    <img alt="characters" src={props.character.image} className="images" />
    <h1>{props.character.name}</h1>
    <h2>Height: {props.character.height} cm</h2>
    <h2>Weight: {props.character.mass} kg</h2>
    <h2>Species: {props.character.species}</h2>
  </div>
);
