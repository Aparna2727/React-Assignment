import React, {useState , useEffect } from 'react'
import './DogImage.css'

export function DogImagesFetch(){

    const[RefImageState, setRefImageState]= useState()

    useEffect(()=>{
      async function ChangeImage(){
      try{
          const response = await fetch("https://dog.ceo/api/breeds/image/random")
          const data = await response.json()
          setRefImageState(data.message)
      }catch(error){
          console.log(error)
      }
  }
  ChangeImage()
    },[])
  
      return(
          <div className="container">
            <h1>Toggle Images</h1>
              <img src={RefImageState} />
          </div>
      )
  }
