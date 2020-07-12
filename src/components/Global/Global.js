import React, { useState, useEffect } from 'react';
import GlobalData from './GlobalData';

const Global = () => {
    const [global, setGlobal] = useState([])
    useEffect(() => {
        totalOfGlobal()
    }, []);
    const totalOfGlobal = () => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(data => {
                const dataSlice = data.slice(0, 1);
                console.log(dataSlice)
                setGlobal(dataSlice)
            })
    }

    return (
        <div className="py-5">
            {
                global.map(gdata => <GlobalData key={gdata.country} data={gdata}></GlobalData>)
            }
        </div>
    );
};

export default Global;