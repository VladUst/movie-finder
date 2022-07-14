import React, { useState } from 'react';

const Search = ({ searchMovies = Function.prototype }) => {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, type);
        }
    };

    const handleFilter = (e) => {
        setType(e.target.dataset.type);
        searchMovies(search, e.target.dataset.type);
    };
    return (
        <div className="row">
            <div className="input-field">
                <input
                    placeholder="search"
                    type="search"
                    className="validate"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    onKeyDown={handleKey}
                />
                <button
                    className="btn search-btn"
                    onClick={() => searchMovies(search, type)}
                >
                    Serach
                </button>
            </div>
            <div>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={handleFilter}
                        checked={type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={handleFilter}
                        checked={type === 'movie'}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={handleFilter}
                        checked={type === 'series'}
                    />
                    <span>Series Only</span>
                </label>
            </div>
        </div>
    );
};

export { Search };
