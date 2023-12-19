import React from 'react';

export default function Navbar() {
    return (
        <div className="navbar-flex">
            <div style={{display: "flex"}}>
                <img className="navbar-img" src={require("../images/jolly_roger.png")} alt=""/>
                <h1 className="navbar-title1">Tony Tony Chopper Facts</h1>
            </div>
            <h1 className="navbar-title2">Strawhat Pirates</h1>
        </div>
    )
}