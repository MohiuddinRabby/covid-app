import React from 'react';

const AllCountryData = (props) => {
    const {country,cases,deaths,recovered,todayCases} = props.data
    return (
        <tr>
            <td>{country}</td>
            <td>{cases}</td>
            <td>{deaths}</td>
            <td>{recovered}</td>
            <td>{todayCases}</td>
        </tr>
    );
};

export default AllCountryData;