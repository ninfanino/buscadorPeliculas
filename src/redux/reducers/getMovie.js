import 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { getMovieInfoSuccess, getMovieInfoError } from '../actions/';

const initialState = {
    isLoadingMovie: false,
    errorMovie: null,
    selectedMovie: '',
    info:{}
}

export const movieInfo = (state=initialState, action) => {
    switch (action.type) {
        case 'SELECTED_MOVIE':
            return {
                ...state,
                selectedMovie:action.id
            }
        case 'GET_MOVIE_INFO':
            return {
                ...state,
                isLoading: true,
                error: null,
                selectedMovie:action.id
            }
        case 'GET_MOVIE_INFO_SUCCESS':
            return {
                ...state,
                isLoading: false,
                info: {...action.result},
            }
        case 'GET_MOVIE_INFO_ERROR':
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

export const movieInfoEpic = action$ => action$.pipe(
    ofType('GET_MOVIE_INFO'),
    mergeMap(action => 
        ajax.getJSON(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${action.id}`).pipe(
            map(response => {
                return getMovieInfoSuccess(response)
            }),
            catchError(error => getMovieInfoError(error))
        )
    )
)
