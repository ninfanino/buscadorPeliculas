import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonBack from '../components/ButtonBack';

const API_KEY = '4670d725';

const Detail = ({match}) => {
    const [movie, setMovie] = useState({});

    const _fetchMovie = ({id}) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                setMovie(movie);
            });
    }

    useEffect(() => {
        const { id } = match.params;
        _fetchMovie({id})
    }, [match.params]);
    
        const { Title, Poster, Actors, Metascore, Plot } = movie;
        return (
            <div>
                <ButtonBack/>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
}

Detail.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object,
        isExact: PropTypes.bool,
        path: PropTypes.string,
        url: PropTypes.string
    })
}

export default Detail;