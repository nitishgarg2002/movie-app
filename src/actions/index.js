// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m3,m2]
// }
// {
//     type: 'DECREASE_COUNT
// }

import movies from "../reducers";

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
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
const initialSearchState = {result: {}}
export function search (state = initialSearchState,action) {
    return state;
}

export default function rootReducer (state,action) {
    return {
        movies: movies(state,action),
        search: search(state,action)
    }
}
