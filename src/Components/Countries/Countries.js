
import React from 'react';
import './Countries.css';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Countries = (props) => {
    console.log(props);
    return (
        <div>
            <div className="country_card mt-5">
                <img src={props.country.flag} alt="Country_falg" />
                <div className="descrip">
                    <h2>{props.country.name}</h2>
                    <p>{props.country.region}</p>
                    <p>{props.country.nativeName}</p>
                    <p>{props.country.subregion}</p>
                    <Button className="mb-3" variant="danger"><Link to={`/CountryDetails/${props.country.alpha3Code}`} >Click here</Link></Button>
                </div>
            </div>
        </div>
    );
};

export default Countries;