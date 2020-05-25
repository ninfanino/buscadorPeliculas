import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { getMovies, getMoviesEpic } from './searchMovies';
import { movieInfo, movieInfoEpic } from './getMovie'

export const reducers = combineReducers({getMovies, movieInfo})

export const epics = combineEpics(getMoviesEpic, movieInfoEpic);