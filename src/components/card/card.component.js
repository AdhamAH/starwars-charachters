import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container ">
    <img alt="shit" src={props.character.image} className="images" />
    <h1>{props.character.name}</h1>
  </div>
);
