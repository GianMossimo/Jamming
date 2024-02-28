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
    const existingTrack = playlistTracks.find((track) => track.id === track.id);
    const newTrack = playlistTracks.concat(track);

    if (existingTrack) {
      return 'Song is already in playlist';
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((track) => track.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  return(
    <div className='app'>
      <Header />
      <div className='split'>
        <div>
          <SearchBar />
          <SearchResults
            userSearchResults = {searchResults}
            onAdd = {addTrack}
          />
        </div>
        <div>
          <Playlist 
            playlistName = {playlistName}
            playlistTracks = {playlistTracks}
            onRemove = {removeTrack}
            onNameChange = {updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}