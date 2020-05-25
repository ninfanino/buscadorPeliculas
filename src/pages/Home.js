import React, { useState } from 'react';
import Title from '../components/Title';
import SearchForm from '../components/SearchForm';
import MoviesListContainer from '../containers/MovieListContainer';

const Home = ({results, isLoading, error, getAllMovies, selectedMovie}) => {
  const [usedSearch, setUsedSearch] = useState(false);

  if (isLoading) { return <p>Loading...</p>}
  if (error) { return <p>Error, try later</p>}

  const _handleResults = (search) => {
    setUsedSearch(true);
    getAllMovies(search);
  }

  const _renderResults = () => {
    return results.length === 0
    ? <p>Sorry! Results not found</p>
    : <MoviesListContainer/>
  }

    return (
      <React.Fragment>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={_handleResults}/>
        </div>
        {
          usedSearch
            ? _renderResults()
            : <small>Use the form to search a movie</small>
        }
      </React.Fragment>
    )
}

export default Home;