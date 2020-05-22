import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const MoviesList = ({ movies }) => (
            <div className="MoviesList">
                {
                movies.map((movie) => {
                    return (
                        <div key={movie.imdbID} className="MovieList-item">
                            <Movie 
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}
                                id={movie.imdbID}
                            />
                        </div>
                    )
                })
                }
            </div>
)

MoviesList.propTypes = {
    movies: PropTypes.array
}

export default MoviesList;