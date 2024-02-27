import React, { useState } from 'react';

export default  function SearchBar() {

    return (
        <div className='search-bar'>
            <input 
                className='search-input'
                placeholder='Search for song or artist'
            />
        </div>
    );
};