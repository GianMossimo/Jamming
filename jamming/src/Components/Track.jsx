import React from "react";
import styles from '../CSS/Track.css';
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";

export default function Track(props) {

    function renderAction() {
        if (props.removal) {
            <button 
                onClick = {passTrackToRemove}
                className = "plus-minus"
            >"-"</button>
        } else {
            <button 
                onClick = {passTrack}
                className = "plus-minus"
            >"+"</button>
        }
    }

    function passTrack(props) {
        props.onAdd(props.track)
    }

    function passTrackToRemove() {
        props.onRemove(props.track)
    }

    return (
        <div className="track">
            <div className="track-info">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
}