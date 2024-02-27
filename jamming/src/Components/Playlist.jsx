import React, { useState, useEffect } from "react";
import styles from '../CSS/Playlist.css';
import Tracklist from "./Tracklist";

export default function Playlist(props) {
    return (
        <div className="playlist">
            <input 
                placeholder="Enter Playlist Name"
            />
            <Tracklist 
                userSearchResults = {props.playlistTracks} 
            />
            <button>Save to Spotify</button>
        </div>
    );
}