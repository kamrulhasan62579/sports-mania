import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './LeagueDetail.css'
import found from '../../icon/found.png'
import flag from '../../icon/flag.png'
import football from '../../icon/football.png'
import gender from '../../icon/gender.png'
import facebook from'../../icon/Facebook.png'
import twitter from '../../icon/Twitter.png'
import youtube from '../../icon/YouTube.png'
import female from '../../icon/female.png'
import male from '../../icon/male.png'


const LeagueDetail = () => {
    const {idLeague} = useParams()
    const [league, setLeague] =  useState({})
    const {dateFirstEvent, strCountry, strSport, strGender, strLeague, strLogo, strFacebook, strTwitter, strYoutube, strWebsite} = league;
    console.log(league);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]) )
    }, [])
    let photo;
    if (strGender === female) {
        photo = <img className="side-img" src={female} alt=""/>
    }
    else {
        photo = <img className="side-img" src={male} alt=""/>
    }
    return (
        <div className="tournament">
            <div className="first-width first-width-opacity">
                  <div style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                      <img className="logo-style" src={strLogo} alt=""/>
                  </div>
            </div>
            <div className="detail-container">
               <div className="detail-div">
                   <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} className="half-detail-1">
                       <div>
                           <h2>{strLeague}</h2>
                        <h4> <img className="icon-img" src={found} alt=""/> Founded: {dateFirstEvent} </h4>
                        <h4><img className="icon-img" src={flag} alt=""/> Country: {strCountry} </h4>
                        <h4> <img className="icon-img" src={football} alt=""/> Sports Type: {strSport} </h4>
                        <h4> <img className="icon-img" src={gender} alt=""/> Gender: {strGender} </h4>
                       </div>
                   </div>
                   <div className="half-detail-2">
                        {
                            photo
                        }
                   </div>
               </div>
               <br/><br/><br/>
               <div className="para-detail">
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est veniam libero repudiandae dignissimos illum minima dolor, temporibus aliquam provident? Dolorum hic dolorem, accusamus omnis doloribus iure dolores impedit nobis voluptatum. Ipsa dolore rerum ab architecto delectus ratione ipsum consequatur inventore quidem, aperiam quia sit, voluptatum perspiciatis veniam recusandae natus debitis. Deleniti officiis placeat totam porro earum laudantium at quidem illum molestiae asperiores sed, animi distinctio odit architecto nobis nisi corrupti accusamus cumque sapiente eveniet. Maiores perspiciatis veniam magni corporis repellat neque cupiditate accusamus sunt itaque? Inventore quibusdam dolorem in, alias eius voluptas voluptatem amet, necessitatibus fugit doloremque reprehenderit exercitationem eligendi non. Officiis, architecto? Obcaecati quo beatae enim vero, iusto, mollitia adipisci fugit quas non tempora error illum quod? Voluptate incidunt id possimus repellendus, harum, veniam cum tempore iure consequatur voluptatibus, dignissimos nesciunt rerum ratione expedita totam beatae? Error, accusamus dolor! Nesciunt enim pariatur voluptate ipsa soluta laudantium ad, sunt tempore? Ad sequi voluptatibus optio explicabo ab tempore. Explicabo laudantium veritatis beatae ad alias id tempore atque iure quibusdam praesentium, magnam tenetur nobis laboriosam dolore assumenda facere accusantium accusamus hic nihil veniam ullam quos! Nam, minima obcaecati fugiat possimus error ea culpa aliquam aperiam dicta non veritatis quis, dignissimos nisi pariatur vel et perferendis necessitatibus repudiandae quisquam aliquid nesciunt. Totam, ducimus quos earum hic repellat neque laboriosam eius quisquam atque ipsa saepe reprehenderit tempora sit explicabo sapiente dolor, provident iste odio, ratione deserunt voluptas ad molestias? Unde officia illo blanditiis non corporis dicta praesentium minus ipsa omnis harum tempore porro obcaecati error, itaque id, repudiandae, recusandae rerum libero reprehenderit numquam laudantium consectetur. Aliquam, debitis incidunt reiciendis culpa laudantium eius ipsa consectetur consequatur soluta iste? Sunt, amet repellendus! Suscipit, unde sapiente deleniti quam quo facere blanditiis officia libero odio doloremque, veritatis delectus cum nesciunt soluta quidem ducimus eius dolore minima ut natus accusamus magnam nobis! Dolor optio quod veritatis corporis adipisci soluta porro sunt assumenda libero saepe iste, reiciendis placeat harum sint voluptas molestias deleniti tempore necessitatibus nemo. Esse, repudiandae? Aperiam, voluptatibus distinctio! Soluta eligendi possimus porro perspiciatis iure magnam ea, accusamus beatae voluptates, commodi cum iste unde velit itaque nemo ipsam obcaecati facilis perferendis est doloremque amet. Corporis magni voluptatibus nemo ea, accusamus velit distinctio reiciendis illo? Repudiandae rem fugit esse nostrum laborum iure sunt exercitationem facere culpa mollitia sapiente nam fugiat, accusamus perferendis dolore enim modi adipisci minus impedit dignissimos. Quisquam molestias tempore ducimus necessitatibus sunt ipsam architecto quaerat similique?</p>
                   <br/> <br/>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est veniam libero repudiandae dignissimos illum minima dolor, temporibus aliquam provident? Dolorum hic dolorem, accusamus omnis doloribus iure dolores impedit nobis voluptatum. Ipsa dolore rerum ab architecto delectus ratione ipsum consequatur inventore quidem, aperiam quia sit, voluptatum perspiciatis veniam recusandae natus debitis. Deleniti officiis placeat totam porro earum laudantium at quidem illum molestiae asperiores sed, animi distinctio odit architecto nobis nisi corrupti accusamus cumque sapiente eveniet. Maiores perspiciatis veniam magni corporis repellat neque cupiditate accusamus sunt itaque? Inventore quibusdam dolorem in, alias eius voluptas voluptatem amet, necessitatibus fugit doloremque reprehenderit exercitationem eligendi non. Officiis, architecto? Obcaecati quo beatae enim vero, iusto, mollitia adipisci fugit quas non tempora error illum quod? Voluptate incidunt id possimus repellendus, harum, veniam cum tempore iure consequatur voluptatibus, dignissimos nesciunt rerum ratione expedita totam beatae? Error, accusamus dolor! Nesciunt enim pariatur voluptate ipsa soluta laudantium ad, sunt tempore? Ad sequi voluptatibus optio explicabo ab tempore. Explicabo laudantium veritatis beatae ad alias id tempore atque iure quibusdam praesentium, magnam tenetur nobis laboriosam dolore assumenda facere accusantium accusamus hic nihil veniam ullam quos! Nam, minima obcaecati fugiat possimus error ea culpa aliquam aperiam dicta non veritatis quis, dignissimos nisi pariatur vel et perferendis necessitatibus repudiandae quisquam aliquid nesciunt. Totam, ducimus quos earum hic repellat neque laboriosam eius quisquam atque ipsa saepe reprehenderit tempora sit explicabo sapiente dolor, provident iste odio, ratione deserunt voluptas ad molestias? Unde officia illo blanditiis non corporis dicta praesentium minus ipsa omnis harum tempore porro obcaecati error, itaque id, repudiandae, recusandae rerum libero reprehenderit numquam laudantium consectetur. Aliquam, debitis incidunt reiciendis culpa laudantium eius ipsa consectetur consequatur soluta iste? Sunt, amet repellendus! Suscipit, unde sapiente deleniti quam quo facere blanditiis officia libero odio doloremque, veritatis delectus cum nesciunt soluta quidem ducimus eius dolore minima ut natus accusamus magnam nobis! Dolor optio quod veritatis corporis adipisci soluta porro sunt assumenda libero saepe iste, reiciendis placeat harum sint voluptas molestias deleniti tempore necessitatibus nemo. Esse, repudiandae? Aperiam, voluptatibus distinctio! Soluta eligendi possimus porro perspiciatis iure magnam ea, accusamus beatae voluptates, commodi cum iste unde velit itaque nemo ipsam obcaecati facilis perferendis est doloremque amet. Corporis magni voluptatibus nemo ea, accusamus velit distinctio reiciendis illo? Repudiandae rem fugit esse nostrum laborum iure sunt exercitationem facere culpa mollitia sapiente nam fugiat, accusamus perferendis dolore enim modi adipisci minus impedit dignissimos. Quisquam molestias tempore ducimus necessitatibus sunt ipsam architecto quaerat similique?</p>
                        
               </div>
               <div className="social-icon">
                   <a href={`https://${strTwitter}`} target="_blank"><img src={twitter} alt=""/></a>
                   <a href={`https://${strFacebook}`} target="_blank"><img src={facebook} alt=""/></a>
                   <a href={`https://${strYoutube}`} target="_blank"><img src={youtube} alt=""/></a>
               </div>
            </div>
        </div>
    );
};

export default LeagueDetail;