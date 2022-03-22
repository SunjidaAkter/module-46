import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flags, capital } = props.country;
    return (
        <div className='country'>
            <h3>Name : {name.common}</h3>
            <p>Capital : {capital}</p>

            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;