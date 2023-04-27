import React from "react";
import "./GuessNumber.css";
import { useState } from "react";

export function NumberGame() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  const [GuessNumber, setGuessNumber] = useState('');
  const [RandomNum, setRandomNum] = useState(randomNumber);
  const [showMessage, setshowMessage] = useState()
  const [count , setCount] = useState(0)
  const [count1, setCount1] = useState()

  // Input field
  function handleInput(event) {
    setGuessNumber(event.target.value);
  }

  function handleButton() {
    if (GuessNumber === "") {
      alert("Please Enter Any Number ");
    } else {
      if (GuessNumber == RandomNum) {
        // alert("Your Guess Lucky number is Mathed Congrantulations!!!");
        setshowMessage("Your Guess Lucky number is Matched Congrantulations!!!")
        setCount1("Attempt :-" +count)
      } else if (GuessNumber < RandomNum) {
        alert("You Gussed a smaller Number!!");
      } else if (GuessNumber > RandomNum) {
        alert("You Guessed a Bigger Number!!");
      } else {
        alert("Invalid Number You Are Guessed");
      }
    }

    setCount(count+1)
  }
  return (
    <div className="container">
      <h1>Number Guessing Game</h1>
      <p>Please Guess Your Lucky Number</p>
      {/* <p>random number {RandomNum}</p> */}
      <input
        value={GuessNumber}
        onChange={handleInput}
        placeholder="Guess lucky number..."
      ></input>
      <button onClick={handleButton}>Guess</button>
      <h2>{showMessage}</h2>
      <h3>{count1}</h3>
    </div>
  );
}
