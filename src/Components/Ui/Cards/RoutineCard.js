import React from "react";

const RoutinesCards = ({ imagen, name }) => {
    return (
        <div className="routine-card">
            <div className="routines">
                <div className="profileCircle">
                    <img className="profileImage" src={imagen}/>
                </div>
                <h3>{name}</h3>
                <button className="buttonVideo">Ver Video</button>
            </div>
        </div>
    )
}

export default RoutinesCards;