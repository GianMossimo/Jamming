import React, { useCallback } from "react";
import styles from '../CSS/Playlist.css';
import Tracklist from "./Tracklist";

export default function Playlist(props) {

    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );

    return (
        <div className="playlist">
            <input 
                className="playlist-input"
                placeholder = "Enter Playlist Name"
                onChange = {handleNameChange}
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