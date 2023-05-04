import React from 'react';

const SearchBar = () => {
    return (
        <div>
            <div className='filterButtons'>
                <ul>
                    <li><h3>Best Match</h3></li>
                    <li><h3>Highest Rating</h3></li>
                    <li><h3>Most Reviews</h3></li>
                </ul>
            </div>
            <div className='searchFields'>
                <input placeholder='Search Businesses'></input>
                <input placeholder='Where?'></input>
            </div>
            <div className='searchBarSubmit'>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default SearchBar;