import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'

const Movie = ({ id, poster, title, year, selectedMovie }) => {
    let history = useHistory();
    const _handleClick = (e) => {
        const idMovie = e.currentTarget.getAttribute('id');
        selectedMovie(idMovie);
        history.push(`/detail/${idMovie}`)
    }
    return (
            <button id={id} onClick={_handleClick} className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img 
                            alt={title}
                            src={poster}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>
                </div>
            </button>
    )
}

Movie.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
}

export default Movie;