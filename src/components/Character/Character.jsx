import React from "react";
import "./Character.css";

function Character({ data }) {
  const { name, image, species, status, origin } = data;
  
  return (
    <div className="card">
      <img src={image} alt="img-character" />
      <h1>{name}</h1>
      <h2>
        <i
          className={`fas fa-circle ${status === "Dead" ? "dead" : status==="Alive"? "alive": "ssss"}`}
        ></i>{" "}
        {status} - {species}
      </h2>
      <p>{origin.name}</p>
    </div>
  );
}

export default Character;
