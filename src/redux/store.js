import { configureStore } from "@reduxjs/toolkit";
import  {MoviesReducer}  from "../Components/MoviesSlice";

const store = configureStore({
    reducer:{
        moviesStoreName: MoviesReducer,
    }
})

export default store;