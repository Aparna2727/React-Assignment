import React from 'react'
import "./listCard.css";

export function ListCard({obj}) {
 
    function alertbtn(){
        alert("ADD TO CARD")
    }
  return (

    <div className="card-content">
      <div>
        <img src={obj.image} alt=""/>
        <h3>{obj.productName}</h3>
        <h1>{obj.Brand}</h1>
        <p>{obj.productDescription}</p>
        <p>{obj.Price}</p>
        <h2>{obj.Rating}</h2>
        <button onClick={alertbtn}>ADD TO CARD</button>
      </div>
    </div>

  );
}