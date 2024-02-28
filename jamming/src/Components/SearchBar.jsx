import React, { useState } from 'react';
import styles from '../CSS/SearchBar.css';

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