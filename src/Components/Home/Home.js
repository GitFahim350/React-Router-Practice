import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Countries from '../Countries/Countries';
import './Home.css';

const Home = () => {
    const [countries, setcountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setcountries(data))
    }, []);
    return (
        <Container>
            <div className="d-flex justify-content-around allcountries">

                {
                    countries.map(country => <Countries country={country} key={country.alpha3Code}></Countries>)

                }

            </div>

        </Container>

    );
};

export default Home;