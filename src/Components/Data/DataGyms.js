import React, { useState } from "react";
import GymCard from "../Ui/Cards/GymCard";

function DataGym() {
    const [searchText, setSearhText] = useState('')

    const cards = [
        {   
            imagen: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name: 'Smart Power Gym', 
            place: 'Tesalónica Apartamentos, Cl. 23 #37-25, Armenia, Quindío',
            information: ''
        }, 

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gym Body Fitnes', 
            place:'Carrera 15 # 17 - 56, Centro, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio CESAR GYM', 
            place:'Av. de los Camellos, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio ATLAS', 
            place:'Cl. 12 #16-31, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Black Gym', 
            place:'Cra. 19 #9 Norte-31 a 9 Norte-169, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio super Gym', 
            place:'Cl. 15 Nte. #1218, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Bodytech Armenia', 
            place:'Carrera 6 # 3 - 180, Centro comercial Calima, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio Smart Fit - Mocawa Plaza', 
            place:'Cra. 14 #9n54, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'ACTIV GYM', 
            place:'Cra. 30 #30-146 a 30-170, Armenia, Quindío',
            information: ''
        },
        
        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio smartlife', 
            place:'Cra. 18 #49-15, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Fortex Muscle', 
            place:'Cra. 19 #45-56, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Muscle Center Gym', 
            place:'# a 19-20, Cl. 45 #192, Armenia, Quindío',
            information: ''
        },
 
        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'CAPF Comfenalco', 
            place:'esquina, Carrera 23, calle 23, Armenia, Quindío',
            information: ''
        },
        
        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'GYM ANIMAL XTREME', 
            place:'Cl. 2 Nte. #18-177, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Crossfit', 
            place:'Cl. 30, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Muscle HardCore Gym', 
            place:'Cra. 26 # 33-28, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio Zona Fitness', 
            place:'Cra. 19 #35 Norte-376 a 35 Norte-622, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Krossfit Gym', 
            place:'Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'LEGION ABOX', 
            place:'Carrera 12, Cl. 15 Nte. #15, Armenia, Quindío',
            information: ''
        },

        {
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Iron cross', 
            place:'Cra. 17 #10-59, Armenia, Quindío',
            information: ''
        }
    ]

    const filteredCards = cards.filter((card) => {
        const { name, place } = card
        const lowerCaseSearchText = searchText.toLowerCase()

        return name.toLowerCase().includes(lowerCaseSearchText) || place.toLowerCase().includes(lowerCaseSearchText)
    })

    return (
        <div className="container-cards-gym">
            <input 
                type='text'
                value={searchText}
                onChange={(e) => setSearhText(e.target.value)}
                placeholder='Buscar Gimnasios'
                className="input"
            />
            {filteredCards.length === 0 && <div className="message"><p>¡Lo sentimos! Actualmente no contamos con la opción que está buscando. Sin embargo, nos comprometemos a trabajar en ello y a brindarle lo que necesita en un futuro cercano.</p></div>}
            <div className="cards-gym">
                {filteredCards.map((card, index) => (
                    <GymCard
                        key={index}
                        name={card.name}
                        place={card.place}
                        imagen={card.imagen}
                        information={card.information}
                    />
                ))}
            </div>
        </div>
    )
}

export default DataGym;