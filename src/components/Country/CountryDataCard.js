import React from 'react';

const CountryDataCard = ({ data }) => {
    // console.log(data)
    return (
        <section>
            <div className="card" style={{ color: '#001a33' }}>
                <div className="card-body">
                    <h4 style={{ color: '#002b80' }}>{data.country}</h4>
                    <p>Total Cases: {data.cases}  | Active: {data.active} | Total death: {data.deaths} | Total Tests: {data.totalTests} </p>
                    <p>Today Found: {data.todayCases} | Today Deaths: {data.todayDeaths} | Total Recoverd: {data.recovered}</p>
                </div>
            </div>
        </section>
    );
};

export default CountryDataCard;