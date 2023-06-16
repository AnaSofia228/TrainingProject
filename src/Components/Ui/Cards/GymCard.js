import React from "react";

const GymCard = ({ imagen, name, place, information }) => {
    return (
        <div className='cardGym'>
            <div><img  className="imagenGym" src={imagen}/></div>
            <div className="textGym">
                <p className="h3">{name}</p>
                <p className="p">{place}</p>
                <div className="gymBox">
                    <a className="span" href={information}>Investigar</a>
                </div>
            </div>
        </div>
    )
}

export default GymCard;