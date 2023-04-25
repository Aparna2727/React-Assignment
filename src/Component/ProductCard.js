import React from 'react'
import "./ProductCard.css";

export default function ProductCard({ProductDetail , alertbtn, style}) {
    const {
        image ,
       productName,
       Brand,
       productDescription ,
       Price,
       Rating,
    } = ProductDetail 
  return (
    <>
    <div className="card-content">
      <div>
        <img src={image} alt=""/>
        <h3>{productName}</h3>
        <h1>{Brand}</h1>
        <p>{productDescription}</p>
        <p>{Price}</p>
        <h2>{ Rating}</h2>
        <button style={style} onClick={alertbtn}>ADD TO CARD</button>
      </div>
    </div>
    </>
  );
}