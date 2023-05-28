import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Movies API's Fetching
export const AllMovies = createAsyncThunk(
    "Movies/fetchAllMovies", 
async () => {
  const result = await fetch("https://www.omdbapi.com/?s=action&apikey=2af6d88c&page=1");
  const MoviesData = await result.json();
  // console.log("mm", MoviesData.Search);
  return MoviesData.Search;
});

// Movies Slice Part

const moviesSlice = createSlice({
  initialState: {
    movies: [],
    favorite:[],
    loading: false,
  },

  name: "moviesStoreName",

  reducers: {
    setLoading: (state, action) => {
      console.log("loadong state", state);
      state.loading = action.payload;
    },

    addFavorite:(state, action)=>{
      const FavoriteList = [...state.favorite]
      const {items , imdbID}=action.payload
      console.log("items ", items)
      console.log("imdbj" , imdbID)
      if(FavoriteList.length !== 0){
          const unique = FavoriteList.filter((ele)=> ele.imdbID !== imdbID)
          unique.push(items)
          state.favorite= [...unique]
      }
      else{
        FavoriteList.push(items)
        state.favorite = [...FavoriteList]
      }
    },


    RemoveFavorite:(state, action)=>{
       const FavoriteMovie = state.favorite  
      FavoriteMovie.splice(action.payload,1)
    }
  },

  // For Fetching API

  extraReducers: (builder) => {
    builder.addCase(AllMovies.fulfilled, (state, action) => {
      console.log("action fulfilled", action);
      state.movies = action.payload;
      state.loading = false;
    });

    builder.addCase(AllMovies.rejected, (state, action) => {
      console.log("action rejected ", action);
      state.movies = [];
    });

    builder.addCase(AllMovies.pending, (state, action) => {
      console.log("action pending", action);
    });
  },
});

export const { setLoading, addFavorite, RemoveFavorite} = moviesSlice.actions;
export const MoviesReducer = moviesSlice.reducer;
