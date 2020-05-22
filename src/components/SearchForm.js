import React, {useState} from 'react';

const API_KEY = '4670d725';

const SearchForm = ({onResults}) => {
    const [inputMovie, setInputMovie] = useState('');

    const _handleChange = (e) => {
        setInputMovie(e.target.value)
    }

    const _handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults } = results;
                console.log(Search, totalResults)
                onResults(Search)
            });
    }

        return (
            <form onSubmit={_handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Movie to search"
                            onChange={_handleChange}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
}

export default SearchForm;
