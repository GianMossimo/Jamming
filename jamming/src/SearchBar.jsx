import React, { useState } from 'react';

export default  function SearchBar({ setResults }) {

    const [input, setInput] = useState('');
    const fetchData = (value) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return value && 
                user && 
                user.name && 
                user.name.toLowerCase().includes(value)
            });
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='search-bar'>
            <input 
                className='search-input'
                placeholder='Search for song or artist'
                value = {input}
                onChange = {(e) => handleChange(e.target.value)}
            />
        </div>
    );
};