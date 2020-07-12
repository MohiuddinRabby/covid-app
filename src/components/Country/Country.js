import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CountryData from './CountryData';

const Country = () => {
    const [allCountry, setAllCountry] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(`https://coronavirus-19-api.herokuapp.com/countries`)
            setAllCountry(result.data)

        }
        fetchData()
    }, [])

    return (
        <div className="py-5">
            {/* <h4>Search Coronavirus Info by Country</h4>
            <div>
                <form>
                    <input type="text" className="form-control" placeholder="Search by country" />
                    <br />
                    <button className="btn btn-info">Search</button>
                </form>
            </div> */}
            {
                allCountry.map(country => <CountryData key={country.country} country={country}></CountryData>)
            }
        </div>
    );
};

export default Country;