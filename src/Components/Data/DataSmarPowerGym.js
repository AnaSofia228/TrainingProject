import React from "react";
import InformatioCards from "../Ui/Cards/InformationCards";

function DataSmartPowerGym() {
    const data = [
        {
            imagen: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1685650470/Imagen_zpfwlu.png',
            hourSunday: 'Cerrado',
            hourMonday: '5:30 - 12:00 / 15:00 - 21:00',
            hourTuesday: '5:30 - 12:00 / 15:00 - 21:00',
            hourWednesday: '5:30 - 12:00 / 15:00 - 21:00',
            hourThursday: '5:30 - 12:00 / 15:00 - 21:00',
            hourFriday: '5:30 - 12:00 / 15:00 - 21:00',
            hourSaturday: '5:30 - 12:00 / 15:00 - 21:00',
            name: 'Julian Ramirez',
            nametwo: 'Andrea Grisales',
            namethree: 'Juan Martinez'
        }
    ]

    return (
        <div className="datas">
            {data.map((card, index) => (
                <InformatioCards
                    key={index}
                    imagen={card.imagen}
                    hourSunday={card.hourSunday}
                    hourMonday={card.hourMonday}
                    hourTuesday={card.hourTuesday}
                    hourWednesday={card.hourWednesday}
                    hourThursday={card.hourThursday}
                    hourFriday={card.hourFriday}
                    hourSaturday={card.hourSaturday}
                    name={card.name}
                    nametwo={card.nametwo}
                    namethree={card.namethree}
                />
            ))}
        </div>
    )
}

export default DataSmartPowerGym;