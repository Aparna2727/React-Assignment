import "./DogImage.css";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

export function DogImagesFetch() {
  const [DogImage, setDogImage] = useState({
    data: "https://images.pexels.com/photos/4587979/pexels-photo-4587979.jpeg?auto=compress&cs=tinysrgb&w=600",
  });
  let Data = useRef();
  function handleClick() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => setDogImage({ data: response.data.message }))
      .catch((error) => console.log(error));
      Data.current.src = DogImage.data;
  }
  useEffect(() => {
    Data.current.src = DogImage.data;
    handleClick();
  },[]);
  return (
    <div className="container">
      <img ref={Data} />
      <br/>
      <button onClick={handleClick}>Change Dog Image</button>
    </div>
  );
}
