import React from 'react'
import s from '../StyleSheets/Ciudad.module.css'

const Ciudad = ({ city }) => {
    return (
        <div>
            
            <div className={`${s.ciudad}`}>
                <div className={`${s.container}`}>
                    <h2>{city.name}</h2>
                    <div className={`${s.info}`}>
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ciudad