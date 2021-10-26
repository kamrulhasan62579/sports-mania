import React, { useEffect, useState } from 'react';
import League from '../League/League';
import Loading from '../Loading/Loading';
import './Home.css'

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    // console.log(leagues);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, [])
    return (
        <div className="tournament">
            <div className="first-width">
                  <h1>Sports Mania</h1>
            </div>
            <div className="league-container">
            { leagues.length === 0 ? <Loading></Loading> :
                leagues.map(lea => <League key={lea.idLeague} league={lea}></League>)
            }
            <h1>Best Wishes For All </h1>
            </div>
        </div>
    );
};

export default Home;