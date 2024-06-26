import SearchResult from "./SearchResults";
import styles from '../CSS/Tracklist.css';
import React from "react";
import Track from "./Track";
import Playlist from "./Playlist";

export default function Tracklist(props) {

    return (
        <div className="tracklist">
            {props.userSearchResults?.map((track) => (
                <Track 
                    className = 'track'
                    track = {track}
                    key = {track.id}
                    isRemoval = {props.isRemoval}
                    onAdd = {props.onAdd}
                    onRemove = {props.onRemove}
                />
            ))}
        </div>
    );
}