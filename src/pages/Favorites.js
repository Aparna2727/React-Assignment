import React from "react";
import './Home.css'
import {useDispatch, useSelector } from "react-redux";
import { RemoveFavorite } from "../Components/MoviesSlice";

export function FavoritesPage() {
  const favoriteItems = useSelector((state) => state.moviesStoreName);
  console.log("fevorite section", favoriteItems);
  const { favorite } = favoriteItems;
  console.log("nhiutfghjk",favorite)

  const dispatch = useDispatch()

  function handleRemoveButton(FavoriteMovieId){
      dispatch(RemoveFavorite(FavoriteMovieId))
      console.log(FavoriteMovieId)
  }

  return (
    <div>
      <div>This is Favorite movies page</div>
      <div className="main-Container">
      {favorite.map((ele, index) => {
        return (
          <div key={ele.index} className="Movies-container">
            <img src={ele.Poster} alt="" />
            <h2>{ele.Title}</h2>
            <h3>{ele.Year}</h3>
           <button className="btn" onClick={()=> handleRemoveButton(index)}>Remove Favorite</button>
          </div>
        );
      })}
      </div>
    </div>
  );
}
