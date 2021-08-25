import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css';

const CountryDetails = () => {
    let { alpha3code } = useParams();
    const [individual,setindividual]=useState("");
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3code}`)
        .then(res=>res.json())
        .then(data=>setindividual(data))
    },[alpha3code])
    console.log(individual);
    return (
        <div className="fullcountry_info">
            <img src={individual.flag} alt="flag" />
            <div>
                <h3>Name:{individual.name}</h3>
                
                <p><strong>Native name</strong>: {individual.nativeName}</p>
                <p><strong>Region</strong>:  {individual.region}</p>
                <p><strong>Population</strong>: {individual.population}</p>
                <p><strong>Capital</strong>: {individual.capital}</p>

            </div>


        </div>
    );
};

export default CountryDetails;