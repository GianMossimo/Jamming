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

    function handleKeyDown(e) {
        if (e.key == 'Enter') {
            passTerm();
        }
    }

    return (
        <div className='search-bar'>
            <input 
                className='search-input'
                placeholder='Search for song or artist'
                onChange = {handleTermChange}
                onKeyDown = {handleKeyDown}
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