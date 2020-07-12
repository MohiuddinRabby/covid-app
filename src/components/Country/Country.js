import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CountryData from './CountryData';

const Country = () => {
    const [allCountry, setAllCountry] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(`https://coronavirus-19-api.herokuapp.com/countries/`)
            setAllCountry(result.data)
        }
        fetchData()
    }, [])

    return (
        <section className="py-5">
            <CountryData allCountry={allCountry}></CountryData>
        </section>
    );
};

export default Country;