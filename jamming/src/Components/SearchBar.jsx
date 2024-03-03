import React, { useState } from 'react';
import styles from '../CSS/SearchBar.css';

export default  function SearchBar(props) {

    const [term, setTerm] = useState('');

    function passTerm() {
        props.onSearch(term);
    }

    function handleTermChange({target}) {
        setTerm(target.value);
    }

    return (
        <div className='search-bar'>
            <input 
                className='search-input'
                placeholder='Search for song or artist'
                onChange = {handleTermChange}
            />
            <button 
                className = 'search-button'
                onClick = {passTerm}
            ><span></span>
                Search
            </button>
        </div>
    );
};