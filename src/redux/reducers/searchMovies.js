import 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { getAllMoviesSuccess, getAllMoviesError } from '../actions/'

const initialState = {
    movies: {},
    isLoading: false,
    error: null,
    searchQuery: ''
}

export const getMovies = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                isLoading: true,
                error: null,
                search:action.search
            }
        case 'GET_MOVIES_SUCCESS':
            return {
                ...state,
                movies: {...action.result},
                isLoading: false,
                error: null
            }
        case 'GET_MOVIES_ERROR':
            return {
                ...state,
                movies: {},
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}


const API_KEY = '4670d725';

export const getMoviesEpic = action$ => action$.pipe(
    ofType('GET_MOVIES'),
    mergeMap(action => 
        ajax.getJSON(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${action.search}`).pipe(
            map(response => getAllMoviesSuccess(response.Search)),
            catchError(error => getAllMoviesError(error))
        )
    )
)

