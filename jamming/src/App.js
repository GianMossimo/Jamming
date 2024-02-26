import './App.css';
import React, { useState } from 'react';

// Component Imports
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';
import Header from './Header';

function Track({ Track }) {
  return (
    <div className='track'>
      <label>
        Track:
        <p>
          {Track.name};
        </p>
      </label>
    </div>
  );
}

function Artist({ Artist }) {
  return (
    <div className='artist'>
      <label>
        Artist:
        <p>
          {Artist.name};
        </p>
      </label>
    </div>
  );
}

export default function App() {

  const [results, setResults] = useState([]);

  return(
    <div className='app'>
      <Header />
      <SearchBar 
        setResults = {setResults}
      />
      <SearchResultList
        results = {results}
      />
    </div>
  );
}