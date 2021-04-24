import React, { useEffect, useState } from 'react';
import './League.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const League = (props) => {
    const {idLeague, strLeague, strSport} = props.league;
    const [liga, setLiga] = useState({})
    const {strLogo} =liga;
    // console.log(strBadge);
    useEffect(() => {
       fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
       .then(res => res.json())
       .then(data => setLiga(data.leagues[0]))
    }, [])
    return (
        <div className="single-league">
            <img src={strLogo} alt=""/>
            <h3>{strLeague}</h3>
            <p>Sports Type: {strSport} </p>
            <Link to={`/league/${idLeague}`}><button className="explore-btn">Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>
        </div>
    );
};

export default League;