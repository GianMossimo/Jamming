import React, { useState, useEffect } from "react";
import styles from '../CSS/Playlist.css';
import Tracklist from "./Tracklist";

export default function Playlist(props) {

    function handleNameChange({ target }) {
        props.onNameChange(target.value);
    }

    return (
        <div className="playlist">
            <input 
                className="playlist-input"
                placeholder = "Enter Playlist Name"
                onNameChange = {handleNameChange}
            />
            <Tracklist 
                userSearchResults = {props.playlistTracks}
                onRemove = {props.onRemove} 
                isRemoval = {true}
            />
            <button>Save to Spotify</button>
        </div>
    );
}