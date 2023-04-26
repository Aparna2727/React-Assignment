import React from 'react'
import './counterApp.css'
import {useState} from 'react'

export function CounterFuntion(){

    const [Numbers, setNumbers] = useState(0)

    function handleIncrement(){
         setNumbers(Numbers+1)
    }

    function handleDecrement(){
        //   if(Numbers > 0){
        //     setNumbers(Numbers-1)
        //   }
        setNumbers(Numbers > 0 ? (Numbers-1) : Numbers)
    }
    return(
        <>
        <h1 className='hed'>Hii! Let's Play Game</h1>
        <div className="container">
        <h2>You Can Play With Buttons To Increment++ || Decrement-- Numbers</h2>
        <h1>COUNTING:-{Numbers}</h1>
        <div className="btn">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </div>
        </div>
        </>
    )
}