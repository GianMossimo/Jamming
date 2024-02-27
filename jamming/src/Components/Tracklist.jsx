import SearchResult from "./SearchResults";
import styles from '../CSS/Tracklist.css';
import React from "react";
import Track from "./Track";
import Playlist from "./Playlist";

export default function Tracklist(props) {

    return (
        <div className="tracklist">
            {props.userSearchResults.map((track) => (
                <Track 
                    track = {track}
                    key = {track.id}
                />
            ))}
        </div>
    );
}