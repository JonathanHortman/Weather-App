import React, { useEffect, useState } from 'react';
import s from '../StyleSheets/Card.module.css';
import style from '../StyleSheets/Detail.module.css'
import Aos from "aos"
import "aos/dist/aos.css"

export default function Card({ clouds, wind, max, min, name, img, onClose, latitud, longitud, temp, weather }) {

  useEffect(() => {
    Aos.init({ duration: 500, once: true })
  }, [])

  const [modal, setModal] = useState({
    clima: false,
  })

  let handleModal = (e) => {

    switch (e.target.name) {

      case "clima":
        return setModal({
          ...modal,
          clima: !modal.clima
        })

      case "close":

        return setModal({
          clima: false,
        })

      default:
        return modal
    }
  }

  return (
    <div lassName={`${s.containerCardContainer}`}>
      <div className={`${max < 6 ? s.contenedorCardIce : max < 16 ? s.contenedorCardCold : max < 26 ? s.contenedorCardSprint : s.contenedorCardSummer}`}>

        <div className={`${s.xContainer}`}>
          <button
            className={`${s.x}`}
            onClick={onClose}>
          </button>
        </div>


        <div className={`${s.contenedorTexto}`}>
          <p className={`${s.ciudad}`}><strong>{name}</strong></p>
          <div className={`${s.climas}`}>
            <p>Min: <strong>{min}</strong>°</p>
            <p>Max: <strong>{max}</strong>°</p>
          </div>
          <button className={s.openButton} name='clima' onClick={(e) => handleModal(e)}>+</button>
        </div>


        <div className={`${s.imagenClima}`}>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="imagen del clima"
          />
        </div>



      </div>
      {
        modal.clima === true ?
          <div className={`${style.backgroundBlack}`}>

            <div data-aos="flip-left" className={`${style.detailContainer}`}>
              <button name='close' className={style.closeButton} onClick={(e) => handleModal(e)}>X</button>
              <div className={style.nameContainer}>
                <h2>{name}</h2>
              </div>
              <div className={`${style.infoinfoContainer}`}>
                <div>Temperatura: {temp} ºC</div>
                <div>Clima: {weather}</div>
                <div>Viento: {wind} km/h</div>
                <div>Cantidad de nubes: {clouds}</div>
                <div>Latitud: {latitud}º</div>
                <div>Longitud: {longitud}º</div>
              </div>

              <div className={style.contenedordelcontenedor}>
                <div className={style.imgContainer}>
                  <img
                    src={`http://openweathermap.org/img/wn/${img}@2x.png`}
                    alt="imagen del clima"
                  />
                </div>
              </div>
            </div>

          </div>
          : null
      }

    </div>
  )
};