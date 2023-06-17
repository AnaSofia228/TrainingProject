import React, { useState } from "react";
import RoutinesCards from "../Ui/Cards/RoutineCard";

function DataRoutine() {
    const [searchText, setSearhText] = useState('')

    const data= [
        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686961609/Imagen16_vmwljw.png',
            name: 'Hip Thrusts y Lunges'            
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686961609/Imagen17_hp6m29.png',
            name: 'Volúmen y Peso'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686957444/Imagen13_z3uwvu.png',
            name: 'Abdominales Avanzados'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686958325/Imagen14_ciurqt.png',
            name: 'Estiramiento Cuello y Hombros'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686961315/Imagen15_o9z95b.png',
            name: 'Piernas Completa'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686956105/Imagen12_el2v9q.png',
            name: 'Brazo Completa'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686961609/Imagen16_vmwljw.png',
            name: 'Redondos y Definidos' 
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686961609/Imagen17_hp6m29.png',
            name: 'Espalda sin Equipo'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686957444/Imagen13_z3uwvu.png',
            name: 'Abdominales Oblicuos'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686958325/Imagen14_ciurqt.png',
            name: 'Estiramiento Piernas y Cadera'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686961315/Imagen15_o9z95b.png',
            name: 'Piernas Esbeltas'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686956105/Imagen12_el2v9q.png',
            name: 'Brazo Fuera de Serie'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686961609/Imagen16_vmwljw.png',
            name: 'Sentadillas y Puentes' 
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686961609/Imagen17_hp6m29.png',
            name: 'Espalda para Mujeres'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686957444/Imagen13_z3uwvu.png',
            name: 'Planchas y Crunches'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686958325/Imagen14_ciurqt.png',
            name: 'Estiramiento Espalda y Hombros'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686961315/Imagen15_o9z95b.png',
            name: 'Piernas Firmes'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686956105/Imagen12_el2v9q.png',
            name: 'Brazo Poderosos'
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686961609/Imagen16_vmwljw.png',
            name: 'Glútos y Abdominales' 
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686961609/Imagen17_hp6m29.png',
            name: 'Mejorar la Postura'
        }
    ]

    const filteredCards = data.filter((card) => {
        const { name } = card
        const lowerCaseSearchText = searchText.toLowerCase()

        return name.toLowerCase().includes(lowerCaseSearchText)
    })

    return (
        <div>
            <input 
                type='text'
                value={searchText}
                onChange={(e) => setSearhText(e.target.value)}
                placeholder='Buscar Gimnasios'
                className="input"
            />
            {filteredCards.length === 0 && <div className="message"><p>¡Lo sentimos! Actualmente no contamos con la opción que está buscando. Sin embargo, nos comprometemos a trabajar en ello y a brindarle lo que necesita en un futuro cercano.</p></div>}
            <div className="cards-routines">
                {filteredCards.map((card, index) => (
                    <RoutinesCards
                        key={index}
                        imagen={card.imagen}
                        name={card.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default DataRoutine;