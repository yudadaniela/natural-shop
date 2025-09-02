import React from 'react';

const Search = () => {
    return (
        <div>
            <input
                type="text"
                placeholder="Buscar..."
                aria-label="Buscar"
            />
            <button>Buscar</button>
        </div>
    );
};

export default Search;