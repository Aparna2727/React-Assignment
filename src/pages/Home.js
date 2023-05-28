import React, { useEffect } from "react";
import './Home.css'
import { useSelector, useDispatch } from "react-redux";
import { AllMovies, addFavorite } from "../Components/MoviesSlice";
import { Link } from "react-router-dom";


export function HomePage() {

  const MoviesItems = useSelector((state) => state.moviesStoreName);
  const { movies } = MoviesItems;
  console.log("Show movies", movies);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(AllMovies())
  },[])

  return (
    <>
    <div className="Header-content">
      <h1>This is home page</h1>
    <p>Please Add Your Favorite Movies in Your Favorite Page</p>
    </div>
    <div className="main-Container">
        {/* <button onClick={ShowAllMovies()}>Show all movies</button> */}
      {MoviesItems.movies.map((items, id) => {
        return (
         
          <div key={items.id} className="Movies-container">
            <img src={items.Poster} alt="" />
            <div>{items.Type}</div>
            <h2>{items.Title}</h2>
            <h3>{items.Year}</h3>
            <button className="btn" onClick={()=>dispatch(addFavorite({items:items, imdbID: items.imdbID}))}><Link to="/favorites">Add to Favorite</Link></button>
          </div>
        );
      })}
    </div>
    </>
  );
}
