import React from "react";
import styles from '../CSS/Track.css';
import Tracklist from "./Tracklist";

export default function Track(props) {

    function renderAction() {
        <button>{ props.removal ? "-" : "+" }</button>
    }

    return (
        <div className="track">
            <div className="track-info">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
        </div>
    );
}