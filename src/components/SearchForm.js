import React, {useState} from 'react';

const SearchForm = ({onResults}) => {
    const [inputMovie, setInputMovie] = useState('');

    const _handleChange = (e) => {
        setInputMovie(e.target.value)
    }

    const _handleSubmit = (e) => {
        e.preventDefault();
        onResults(inputMovie);
    }

        return (
            <React.Fragment>
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
            </React.Fragment>
        )
}

export default SearchForm;
