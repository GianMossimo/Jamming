import React from 'react';
import Tracklist from './Tracklist';

export default function SearchResults(props) {
    return (
        <div className='search-results'>
            <Tracklist 
                userSearchResults = {props.userSearchResults}
                isRemoval = {false}
                onAdd = {props.onAdd}
            />
        </div>
    );
}