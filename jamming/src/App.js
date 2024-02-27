import './App.css';
import React, { useState } from 'react';

// Component Imports
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Header from './Components/Header';
import Playlist from './Components/Playlist';

export default function App() {

  // For Search Results
  const [searchResults, setSearchResults] = useState({
    name: "Three Wishes",
    artist: "Dance Gavin Dance",
    album: "Afterburner"
  });

  // For Playlist
  const [playlistName, setPlaylistName] = useState('Example Playlist Name');
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Three Wishes",
      artist: "Dance Gavin Dance",
      album: "Afterburner",
    },
    {
      name: "Lyrics Lie",
      artist: "Dance Gavin Dance",
      album: "Afterburner"
    },
    {
      name: "Nothing Shameful",
      artist: "Dance Gavin Dance",
      album: "Afterburner"
    }
  ]);

  function addTrack(track) {

  }

  return(
    <div className='app'>
      <div>
        <Header />
      </div>
      <div>
        <SearchBar />
        <SearchResults
          userSearchResults = {searchResults}
        />
      </div>
      <div>
        <Playlist 
          playlistName = {playlistName}
          playlistTracks = {playlistTracks}
        />
      </div>
    </div>
  );
}