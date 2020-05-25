export const getAllMovies = (search) => ({
    type: 'GET_MOVIES',
    search
})

export const getAllMoviesSuccess = (result) => ({
    type: 'GET_MOVIES_SUCCESS',
    result
})

export const getAllMoviesError = (error) => ({
    type: 'GET_MOVIES_ERROR',
    error
})

export const selectedMovie = (id) => ({
    type: 'SELECTED_MOVIE',
    id
})

export const getMovieInfo = (id) => ({
    type: 'GET_MOVIE_INFO',
    id
})

export const getMovieInfoSuccess = (result) => ({
    type: 'GET_MOVIE_INFO_SUCCESS',
    result
})

export const getMovieInfoError = (error) => ({
    type: 'GET_MOVIE_INFO_ERROR',
    error
})