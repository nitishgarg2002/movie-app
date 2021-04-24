// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m3,m2]
// }
// {
//     type: 'DECREASE_COUNT
// }



export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}
export function addFavourites (movie) {
    return {
        type: ADD_TO_FAVOURITE,
        movie
    }
}
export function removeFromFavourites (movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}
export function setShowFavourites (val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList(movie) {
    return {
      type: ADD_MOVIE_TO_LIST,
      movie,
    };
  }


export function handleMovieSearch(movie) {
    return function (dispatch) {
      const url = `http://www.omdbapi.com/?apikey=d50840c0&t=${movie}`;
      fetch(url)
        .then((response) => response.json())
        .then((movie) => {
          console.log('movie', movie);
          // dispatch action to save search results in store
          dispatch(addMovieSearchResult(movie));
        });
    };
  }

export function addMovieSearchResult (movie)  {
    return {
        type: ADD_SEARCH_RESULT,
        movie
    };
}