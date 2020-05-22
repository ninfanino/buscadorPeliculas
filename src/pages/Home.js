import React, { useState } from 'react';
import Title from '../components/Title';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';

const Home = () => {
  const [results, setResults] = useState([]);
  const [usedSearch, setUsedSearch] = useState(false);

  const _handleResults = (results) => {
    setResults(results);
    setUsedSearch(true);
  }

  const _renderResults = () => {
    return results.length === 0
    ? <p>Sorry! Results not found</p>
    : <MoviesList movies={results}/>
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