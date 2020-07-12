import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CountryData from './CountryData';
import Search from '../Search/Search';

const Country = ({getQuery}) => {
    const [allCountry, setAllCountry] = useState([])
    const [query,setQuery] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(`https://coronavirus-19-api.herokuapp.com/countries/${query}`)
            setAllCountry(result.data)

        }
        fetchData()
    }, [query])

    return (
        <section className="py-5">
            <Search getQuery={(query)=>setQuery(query)}></Search>
            {
                allCountry.map(country => <CountryData key={country.country} country={country}></CountryData>)
            }
        </section>
    );
};

export default Country;