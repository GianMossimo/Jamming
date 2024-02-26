import React, { useState, useEffect } from 'react';
import SearchResult from './SearchResult';

export default function SearchResultList({ results }) {
    return (
        <div className='search-result-list'>
            {
                results.map((result, id) => {
                    return  <SearchResult 
                                result = {result} 
                                key = {id}
                            />
                })
            }
        </div>
    )
}