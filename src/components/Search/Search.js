import React, { useState } from 'react';

const Search = ({ getQuery }) => {
    const [searchText, setSearchText] = useState('')
    const onChange = (query) => {
        setSearchText(query)
        getQuery(query)
    }
    return (
        <section className="container-fluid">
            <form>
                <input type="text" value={searchText} onChange={(e) => onChange(e.target.value)} className="form-control mb-2" placeholder="search coutry" autoFocus />
            </form>
        </section>
    );
};

export default Search;