import React, { useCallback } from "react";
import styles from '../CSS/Track.css';
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";

export default function Track(props) {

    const passTrack = useCallback((event) => {
        props.onAdd(props.track);
    }, [props.onAdd, props.track]);


    const passTrackToRemove = useCallback((event) => {
        props.onRemove(props.track);
    }, [props.onRemove, props.track]);

    function renderAction() {
        if (props.isRemoval) {
            return (
                <button onClick = {passTrackToRemove} className = "plus-minus">
                    -
                </button>
            );
        } else {
            return (
                <button onClick = {passTrack} className = "plus-minus">
                    +
                </button>
            );
        }
    }

    return (
        <div className="track">
            <div>
                <img 
                        className = "image"
                        src={props.track.art}
                />
            </div>
            <div className="track-info">
                <h3 className="song">{props.track.name}</h3>
                <p className = "artist">{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
};