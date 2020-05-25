import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonBack from '../components/ButtonBack';

const Detail = ({match, info, isLoading, error, selectedMovie, getMovieInfo, dispatchSelectedMovie}) => {
    useEffect(() => {
        const { id } = match.params;
        if(Object.entries(info).length === 0 || (id !== selectedMovie)) {
            dispatchSelectedMovie(id);
            getMovieInfo(id);
        }
    }, [match.params, dispatchSelectedMovie, getMovieInfo]);

    if (isLoading) { return <p>Loading...</p>}
    if (error) { return <p>Error, try later</p>}
    
    

    const { Title, Poster, Actors, Metascore, Plot } = info;
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