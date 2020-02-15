import React from 'react';
import './SearchBox.styles.css';

const SearchBox = ({ fieldPlaceholder, onSearchTextChanged }) => {
    return (
        <input 
            className='search-box-field' 
            type='search' 
            onChange={ onSearchTextChanged } 
            placeholder={ fieldPlaceholder }
        />
    );
}

export default SearchBox;
