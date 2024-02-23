import './App.css';
import React from 'react';

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

function Playlist({ Track, Artist} ) {
  return (
    <div className='playlist'>
      <label>Save to Playlist</label>
      <tr>
        <td>{SONGS.artist}</td>
        <td>{SONGS.name}</td>
      </tr>
    </div>
  );
}

function SearchBar({ query }) {
  return (
    <div className='search-bar'>
      <form>
        <input
          placeholder='Search for song or artist'
        />
      </form>
    </div>
  );
}

function Header() {
  return (
    <div className='header'>
      <h1>Jamming</h1>
    </div>
  );
}

export default function App() {
  return(
    <div className='app'>
      <Header />
      <SearchBar />
      <Playlist />
    </div>
  );
}

const SONGS = [
  {name: "Three Wishes", artist: "Dance Gavin Dance"}
];