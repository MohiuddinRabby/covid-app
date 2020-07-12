import React from 'react';

const GlobalData = (props) => {
    const { cases, deaths, recovered } = props.data;
    return (
        <div className="py-5">
            <h2>Total Cases: {cases}</h2>
            <h2>Total Death: {deaths}</h2>
            <h2>Total Recovered: {recovered}</h2>
        </div>
    );
};

export default GlobalData;