import React, { useEffect, useRef, useState } from 'react'
import './toggleimage.css'

export function ImageToggle(){
     const [counter, setCounter] = useState(0)

     let inputImage = useRef()
     console.log(inputImage.current)

    const ImageArr = ["https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtS5VKxQV8A6BvC0gdCGFSSZ4Z9PcKPwi9w&usqp=CAU", "https://images.indianexpress.com/2021/12/montreux.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNDHBaxEVhH1tQVRcCRFhPtFJsqvA6ldCfhTfuiseYUIzPjW3TRm9yPcLIwghf_3esUk&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4t09Zf72mpXDWIH02TaR4HQzEmqHc8yf6w_19KDhTUOzqFm_AS4sQN09JLcOB-g5e7UE&usqp=CAU", "https://st.depositphotos.com/1664950/3419/i/950/depositphotos_34193595-stock-photo-beautiful-roses-and-butterfly-flower.jpg"];
 

    function handleClickImage(){
            setCounter(counter +1)  // counter = 1 2 3 4 5
    }

    useEffect(()=>{
        if(counter < ImageArr.length){
           inputImage.current.src = ImageArr[counter]
        }else{
            setCounter(0)
        }
    },[counter])

    return (

        <div className='container'>
            <h1>Toggle Images </h1>
               <img className='images' ref={inputImage}/>
               <br />
            <button onClick={handleClickImage}>Change Image</button>
        </div>
    )
}