import React, { useEffect, useState } from 'react';
import AllCountryData from './AllCountryData';

const AllCountry = () => {
    const [allCountryData,setAllCountryData] = useState([])
    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllCountryData(data)
            })
    }, [])
    return (
       <table className="table">
           <thead>
               <tr>
                   <th>Country</th>
                   <th>Cases</th>
                   <th>Deaths</th>
                   <th>Recovered</th>
                   <th>today death</th>
               </tr>
           </thead>
           <tbody>
               {
                   allCountryData.map(allData=><AllCountryData data = {allData}></AllCountryData>)
               }
           </tbody>
       </table>
    );
};

export default AllCountry;