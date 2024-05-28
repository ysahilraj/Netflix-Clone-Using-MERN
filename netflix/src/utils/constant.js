export const API_END_POINT = "http://localhost:7070/api/v1/user";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDkxZjFiZTAwNGJhZDAzMzUzMmQ3MTA2MWJjMTIwYyIsInN1YiI6IjY1NjIxOGI3MjQ0MTgyMDBjYTc3MGJlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZJjvldDF9_0GEq-XFbVTaUXnM2rrQ30O74YVSmih4jY",
  },
};

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
export const  SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";