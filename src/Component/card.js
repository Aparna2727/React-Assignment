import React from "react";
import "./card.css";

export default function ProfileCard(props) {
  return (
    <div className="card-content">
      <div>
        <img src={props.image} alt=""/>
        <h3>{props.designation}</h3>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <button onClick={props.user}>See more</button>
      </div>
      
    </div>
  );
}
