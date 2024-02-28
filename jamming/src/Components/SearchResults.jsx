import React, { useState, useEffect } from 'react';
import SearchResult from './SearchResults';
import Tracklist from './Tracklist';

export default function SearchResults(props) {
    return (
        <div className='search-results'>
            <Tracklist 
                userSearchResults = {props.searchResults}
                isRemoval = {false}
                onAdd = {props.onAdd}
            />
        </div>
    );
}