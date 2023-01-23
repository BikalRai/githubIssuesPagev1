import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FaTag, FaMapSigns } from 'react-icons/fa';

import './style.css';

const Searchbar = () => {
    const [search, setSearch] = useState('');

    //function to handle search
    const handleSearchInput = ({ target: { value } }) => {
        setSearch(value);
        console.log(search);
    };

    return (
        <>
            <div className="container">
                <div className="filter__box">
                    <div className="filter">
                        <select name="filter" id="filter">
                            <option value="">Filters</option>
                        </select>
                    </div>
                    <div className="search-bar">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="is:issue is:open "
                            onChange={handleSearchInput}
                        />
                    </div>
                </div>
                <div className="action__box">
                    <div className="action__btns">
                        <button className="action">
                            <FaTag />
                            <span>Labels</span>
                        </button>
                        <button className="action two">
                            <FaMapSigns />
                            <span>Milestones</span>
                        </button>
                    </div>
                    <button className="new-issue">New Issue</button>
                </div>
            </div>
        </>
    );
};

export default Searchbar;
