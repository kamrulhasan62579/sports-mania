import React from 'react';

const Loading = () => {
    return (
       <div style={{display: "flex",  width: "100%", justifyContent: "center", alignItems: "center"}} className="">
        <div className="">
            <h5 style={{color: "white"}}>Loading...</h5>
            <img style={{height: "300px", width: "300px"}} className="img-fluid" src="https://i.pinimg.com/originals/41/d0/2f/41d02feb585e8189344c2e0abaf223b7.gif" alt=""/> 
        </div>
       </div>
    );
};

export default Loading;