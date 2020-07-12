import React from 'react';
import './GlobalData.css';
const GlobalData = (props) => {
    const { cases, deaths, recovered } = props.data;
    return (
        <div className="container">
            <h4>Global Coronavirus Info</h4>
            <div className="card">
                <div className="card-body">
                    <p>Total Coronavirus cases</p>
                    <p className="font-style">{cases}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <p>Deaths</p>
                    <p className="font-style">{deaths}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <p>Recovered</p>
                    <p className="font-style">{recovered}</p>
                </div>
            </div>
        </div>
    );
};

export default GlobalData;