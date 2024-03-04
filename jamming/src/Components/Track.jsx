import React from "react";
import styles from '../CSS/Track.css';
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";

export default function Track(props) {

    function renderAction() {
        if (props.removal) {
            return (
                <button 
                    onClick = {passTrackToRemove}
                    className = "plus-minus"
                >-</button>
            );
        } else {
            return (
                <button 
                    onClick = {passTrack}
                    className = "plus-minus"
                >+</button>
            );
        }
    }

    function passTrack() {
        props.onAdd(props.track)
    }

    function passTrackToRemove() {
        props.onRemove(props.track)
    }

    return (
        <div className="track">
            <div className="track-info">
                <h3 className="song">{props.track.name}</h3>
                <p className = "album">{props.track.artist} | {props.track.album}</p>
            </div>
            <button
                className = "plus-minus"
            ></button>
            {renderAction()}
        </div>
    );
}