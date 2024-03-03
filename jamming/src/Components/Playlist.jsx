import React from "react";
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
            <button 
                className = "playlist-button"
                onClick = {props.onSave}
            ><span></span>
                Save to Spotify
            </button>
            <Tracklist 
                userSearchResults = {props.playlistTracks}
                onRemove = {props.onRemove} 
                isRemoval = {true}
            />
        </div>
    );
}