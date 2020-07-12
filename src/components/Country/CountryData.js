import React from 'react';

const CountryData = (props) => {
    const { country, cases, active, deaths, todayCases, todayDeaths, totalTests, recovered } = props.country;
    console.log(props)
    return (
        <div>
            <div className="card" style={{ color: '#001a33' }}>
                <div className="card-body">
                    <h4 style={{color:'#002b80'}}>{country}</h4>
                    <p>Total Cases: {cases}  | Active: {active} | Total death: {deaths} | Total Tests: {totalTests} </p>
                    <p>Today Found: {todayCases} | Today Deaths: {todayDeaths} | Total Recoverd: {recovered}</p>
                </div>
            </div>
        </div>
    );
};

export default CountryData;