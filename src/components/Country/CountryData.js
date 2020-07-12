import React from 'react';
import CountryDataCard from './CountryDataCard';

const CountryData = ({ allCountry }) => {
    return (
        <section>
            {
                allCountry.map(data => <CountryDataCard key={data.country} data={data}></CountryDataCard>)
            }
        </section>
    );
};

export default CountryData;