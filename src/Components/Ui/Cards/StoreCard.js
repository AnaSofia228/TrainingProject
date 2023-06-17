import React from "react";

const StoreCards = ({ imagen, name, description, price }) => {
    return (
        <div className="store-card">
            <div className="products">
                <div className="profileCircle">
                    <img className="profileImage" src={imagen}/>
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
                <h2>{price}</h2>
                <button className="buttonCart">Añadir al Carrito</button>
            </div>
        </div>
    )
}

export default StoreCards;