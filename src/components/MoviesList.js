import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const MoviesList = ({ movies, selectedMovie }) => (
    <div className="MoviesList">
        {
        Object.keys(movies).map((movie) => {
            return (
                <div key={movies[movie].imdbID} className="MovieList-item">
                    <Movie 
                        title={movies[movie].Title}
                        year={movies[movie].Year}
                        poster={movies[movie].Poster}
                        id={movies[movie].imdbID}
                        selectedMovie={selectedMovie}
                    />
                </div>
            )
        })
        }
    </div>
)

MoviesList.propTypes = {
    movies: PropTypes.object
}

export default MoviesList;