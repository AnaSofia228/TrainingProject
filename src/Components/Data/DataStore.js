import React, { useState } from "react";
import StoreCards from "../Ui/Cards/StoreCard";

function DataStore() {
    const [searchText, setSearhText] = useState('')

    const data= [
        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686969869/Imagen19_xz4ryf.png',
            name: 'Camisilla Esqueleto',
            description: 'Entrenar Gym Hombre Gimnasio Fitness',
            price: 37990
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686969869/Imagen18_dgvmpt.jpg',
            name: 'Top Deportivo',
            description: 'Sin Horma',
            price: 38925
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686973178/Imagen22_llsgs2.jpg',
            name: 'Bolsa De Gimnasio',
            description: 'Para Mujer Con Compartimento Para Zapatos',
            price: 209233
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686974073/Imagen23_cddfeq.png',
            name: 'Proteina TFP',
            description: 'Super Girl 2 Lbs / Shaker Gratis',
            price: 149000
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686969869/Imagen19_xz4ryf.png',
            name: 'Camisilla Esqueleto',
            description: 'Entrenar Gym Hombre Gimnasio Fitness',
            price: 34990
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686969869/Imagen18_dgvmpt.jpg',
            name: 'Top Para Mujer',
            description: 'Diseño Deportivo Con Espalda Tipo Atlética',
            price: 15450
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686973178/Imagen22_llsgs2.jpg',
            name: 'Bolso deportivo impermeable',
            description: 'Bolsa ajustable para gimnasio',
            price: 72917
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686974073/Imagen23_cddfeq.png',
            name: '100% Max Female',
            description: '2 lb vainilla',
            price: 125300
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686969869/Imagen19_xz4ryf.png',
            name: 'Camisilla Esqueleto',
            description: 'Entrenamiento Gym Tecnologia Vapour Fit',
            price: 29900
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686969869/Imagen18_dgvmpt.jpg',
            name: 'Brasier-top',
            description: 'running básico sujeción alta',
            price: 31000
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686973178/Imagen22_llsgs2.jpg',
            name: 'Bolso Deportivo',
            description: 'Gym Entrenamiento Classic Verde',
            price: 169990
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686974073/Imagen23_cddfeq.png',
            name: 'Pre Workout TFP',
            description: '1UP 300 Gramos',
            price: 49000
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686969869/Imagen19_xz4ryf.png',
            name: 'Camisilla Esqueleto con Capota',
            description: 'Entrenar Gym Hombre Gimnasio',
            price: 37900
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686969869/Imagen18_dgvmpt.jpg',
            name: 'TOP BRA UNICOLOR',
            description: 'ESCOTE PEEK A BOO EN MALLA CON COPAS REMOVIBLES',
            price: 29950
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686973178/Imagen22_llsgs2.jpg',
            name: 'Nike Nk Gym Club',
            description: 'Maletín Negro De Mujer Para Entrenamiento',
            price: 254.950
        },

        {
            imagen: 'https://res.cloudinary.com/dkyqaw07i/image/upload/v1686974073/Imagen23_cddfeq.png',
            name: 'BEST PROTEIN MUJER ED LIMITADA',
            description: '28ser 2.04oz PROSCIENCE',
            price: 175.000
        },
    ]

    const filteredCards = data.filter((card) => {
        const { name } = card
        const lowerCaseSearchText = searchText.toLowerCase()

        return name.toLowerCase().includes(lowerCaseSearchText)
    })

    return (
        <div>
            <div className="filterProducts">
                <input 
                    type='text'
                    value={searchText}
                    onChange={(e) => setSearhText(e.target.value)}
                    placeholder='Buscar Gimnasios'
                    className="input"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
            </div>
            {filteredCards.length === 0 && <div className="message"><p>¡Lo sentimos! Actualmente no contamos con la opción que está buscando. Sin embargo, nos comprometemos a trabajar en ello y a brindarle lo que necesita en un futuro cercano.</p></div>}
            <div className="cards-products">
                {filteredCards.map((card, index) => (
                    <StoreCards
                        key={index}
                        imagen={card.imagen}
                        name={card.name}
                        description={card.description}
                        price={card.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default DataStore;