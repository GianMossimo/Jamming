import './App.css';
import React, { useCallback, useState } from 'react';

// Component Imports
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Header from './Components/Header';
import Playlist from './Components/Playlist';
import { Spotify } from './Spotify API/Spotify';

export default function App() {

  // For Search Results
  const [searchResults, setSearchResults] = useState();

  // For Playlist
  const [playlistName, setPlaylistName] = useState('Jammming Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack(track) {

    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);

    if (existingTrack) {
      console.log('Song is already in playlist');
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  const savePlaylist = useCallback(() => {
    const trackURIs = playlistTracks?.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      updatePlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  function search(term) {
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term);
  }

  return(
    <div className='app'>
      <Header />
      <div className='split'>
        <div>
          <SearchBar 
            onSearch = {search}
          />
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
            onSave = {savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}